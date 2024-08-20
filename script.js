const stats = JSON.parse(`[
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]`);

const statsArea = document.querySelector(".js-stats");

stats.forEach((stat, index) => {
    statsArea.innerHTML += `
        <div class="card card${index} ${(stat.title).toLowerCase()}">
            <div>
                <div>
                    <p>${stat.title}</p>
                    <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
                </div>
                <div class="content">
                    <p class="time js-time">${stat.timeframes.weekly.current + "hrs"}</p>

                    <p><span class="name js-name">Last week</span> - <span class="pre-hours js-pre-hours">${stat.timeframes.weekly.previous + "hrs"}</span></p>
                </div>
            </div>
        </div>
    `;
});

const dailyButton = document.querySelector(".daily");
const weeklyButton = document.querySelector(".weekly");
const monthlyButton = document.querySelector(".monthly");

const cards = document.querySelectorAll(".card");
const time = document.querySelectorAll(".js-time");
const names = document.querySelectorAll(".js-name");
const preHours = document.querySelectorAll(".js-pre-hours");

function change(button, button1, button2, text, period) {
    button.addEventListener("click", () => {
        button1.classList.remove("active");
        button2.classList.remove("active");
        button.classList.add("active");

        stats.forEach((stat, index) => {
            const type = period === 1 ? stat.timeframes.daily : period === 2 ? stat.timeframes.weekly : stat.timeframes.monthly;

            cards.forEach(card => {
                if (card.classList.contains(`card${index}`)) {
                    time[index].innerHTML = type.current + "hrs";
                    names[index].innerHTML = text;
                    preHours[index].innerHTML = type.previous + "hrs";
                }
            });
        });
    });
}

change(dailyButton, weeklyButton, monthlyButton, "Yesterday", 1);
change(weeklyButton, dailyButton, monthlyButton, "Last week", 2);
change(monthlyButton, dailyButton, weeklyButton, "Last month", 3);

const map_by_me = new Map();
map_by_me.set("first", 1).set("second", 2).set("third", 3);
console.log(map_by_me);
// map_by_me.clear();
console.log(map_by_me.get("third"));
console.log(map_by_me.delete("second")); //return true if deleted the value from the map
console.log(map_by_me);

const myMap = new Map([
    ["name", "Boobathi"],
    ["age", 25],
    ["isStudent", true],
    ["city", "Chennai"],
    ["language", "JavaScript"],
    ["score", 89.5],
    ["email", "boobathi@example.com"],
    ["isLoggedIn", false],
    ["joined", new Date("2024-06-15")],
    ["hobbies", ["reading", "coding", "music"]],
]);

console.log(myMap.entries());
console.log(myMap.values());
console.log(myMap.keys());
console.log(Array.from(myMap.entries()));

myMap.forEach((value, key, map) => { console.log(`${key}--->${value}-->${map.get(key)}`) });

console.log(myMap.has("isStudent"));

const living_things = new Map(
    [
        [1, {
            name: "lion",
            type: "animal"
        }],
        [2,
            {
                name: "kuruvi",
                type: "bird"
            }],
        [
            3,
            {
                name: "elephant",
                type: "animal"
            }
        ],
        [
            4,
            {
                name: "peacock",
                type: "bird"
            }
        ],
        [
            5,
            {
                name: "shark",
                type: "fish"
            }
        ],
        [
            6,
            {
                name: "wale",
                type: "fish"
            }
        ],
        [
            7,
            {
                name: "crow",
                type: "bird"
            }
        ]
    ]
)

const categorized = Map.groupBy(living_things.values(),(value)=> value.type);
console.log(categorized);
// console.log(...categorized);

console.log(categorized.size);
// const map1 = new Map([
//   ["firstName", "Boobathi"],
//   ["lastName", "Kumar"],
// ]);

// const map2 = new Map([
//   [101, "Math"],
//   [102, "Science"],
// ]);

// const map3 = new Map([
//   [true, "Active"],
//   [false, "Inactive"],
// ]);

// const keyA = [1, 2];
// const keyB = [3, 4];
// const map4 = new Map([
//   [keyA, "Pair A"],
//   [keyB, "Pair B"],
// ]);

// const user1 = { id: 1 };
// const user2 = { id: 2 };
// const map5 = new Map([
//   [user1, "Admin"],
//   [user2, "Guest"],
// ]);

// const map6 = new Map([
//   ["start", () => console.log("Starting...")],
//   ["stop", () => console.log("Stopping...")],
// ]);

// const map7 = new Map([
//   ["settings", new Map([
//     ["theme", "dark"],
//     ["layout", "grid"]
//   ])]
// ]);

// const map8 = new Map([
//   ["roles", new Set(["admin", "editor"])],
//   ["permissions", new Set(["read", "write"])],
// ]);

// const map9 = new Map([
//   [new Date("2024-01-01"), "New Year"],
//   [new Date("2025-12-25"), "Christmas"],
// ]);

// const map10 = new Map([
//   ["username", "boobathi123"],
//   [42, "The Answer"],
//   [true, "Confirmed"],
//   [{ x: 1 }, "ObjectKey"],
// ]);

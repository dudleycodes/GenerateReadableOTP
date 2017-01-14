export default class ReadableOTP {

    /** Generate a random hexadecimal value */
    public static Hexadecimal(length: number = 6): string[] {
        if (length < 2) {
            console.warn("ReadableOTP.Hexadecimal() cannot be less than 2! Value set to 2.");
            length = 2;
        }

        let charPool: string[] = "0123456789ABCDEF".split("");
        let returnArray: string[] = [];

        if (length % 2 !== 0) {
            returnArray.push(this.GetRandomArrayValue(charPool));
        }

        while (returnArray.join("").length < length) {
            returnArray.push(this.GetRandomArrayValue(charPool) + this.GetRandomArrayValue(charPool));
        }

        return returnArray;
    }

    /** Generate a short phrase using words from a 4th grade spelling lists. */
    public static ShortPhrase(maxLength: number = 24): string[] {
        if (maxLength < 21) {
            console.warn("ReadableOTP.maxLength() cannot be less than 21! Value set to 21.");
            maxLength = 21;
        }

        let returnArray: string[] = [];

        do {
            returnArray = [this.subject[Math.floor(Math.random() * this.subject.length)].toLowerCase(),
                this.verb[Math.floor(Math.random() * this.verb.length)].toLowerCase(),
                this.object[Math.floor(Math.random() * this.object.length)].toLowerCase()];

        } while (returnArray.join("").length > maxLength);

        return returnArray;
    }

    /** Generates a short pharse with a random number 2-digit number either appended or prepended */
    public static ShortPhraseNumber(): string[] {

        if (this.GetRandomBoolean()) {
            return [...this.ShortPhrase(), this.GetRandomInt(10, 99).toString()];
        } else {
            return [this.GetRandomInt(10, 99).toString(), ...this.ShortPhrase()];
        }
    }

    /** Generates a random word with a trailing 2-digit number */
    public static WordNumber(): string[] {
        let returnArray: string[] = [this.GetRandomArrayValue([...this.subject, ...this.object]), this.GetRandomInt(10, 99)];

        if (this.GetRandomBoolean()) {
            returnArray.reverse();
        }

        return returnArray;
    }

    private static readonly subject: string[] = ["aliens", "allies", "anteaters", "antelope", "badgers", "bats", "bears", "beasts", "birds", "bison",
        "blacksmiths", "boars", "bobcats", "buffalo", "bugs", "bulldogs", "bullies", "butterflies", "camels", "cats", "cattle",
        "chickens", "cobras", "cows", "coyotes", "crabs", "crickets", "criminals", "cyclops", "deer", "demons", "dogs", "donkeys",
        "doves", "dragonflies", "dragons", "ducks", "eagles", "eels", "elephants", "elk", "elves", "falcons", "ferrets", "fish", "foxes",
        "frogs", "geckos", "geese", "gerbils", "ghosts", "giants", "goats", "goblins", "goldfish", "gophers", "gorillas", "governments",
        "grasshoppers", "gremlins", "hamsters", "hawks", "hedgehogs", "horses", "hunters", "insects", "jackals", "jellyfish", "kangaroos",
        "kittens", "lemurs", "leopards", "lions", "lizards", "lobsters", "locusts", "lumberjacks", "martians", "mice", "minions", "monkeys",
        "monsters", "moose", "moths", "mules", "mustangs", "mutants", "ninjas", "orcs", "otters", "owls", "oxen", "pandas", "parrots",
        "pelicans", "penguins", "phantoms", "pigs", "pirates", "pokemon", "ponies", "puppies", "pythons", "rabbits", "rams", "rascals",
        "rats", "ravens", "reptiles", "robins", "robots", "scarecrows", "scientists", "seals", "sharks", "sheep", "shrimp", "skeletons",
        "skunks", "sloths", "snails", "snakes", "spiders", "spies", "squid", "squirrels", "starfish", "stingrays", "swans", "tigers",
        "toads", "trolls", "turkeys", "turtles", "undead", "unicorns", "vampires", "villians", "vultures", "warriors", "werewolves",
        "whales", "wildcats", "wolves", "woodpeckers", "worms", "yeti", "zebras", "zombies"];

    private static readonly verb: string[] = ["admire", "adore", "dig", "fancy", "choose", "take", "desire", "like", "love", "want", "prefer"];

    private static readonly object: string[] = ["adventure", "advice", "afternoons", "aircraft", "airplanes", "airports", "alarms", "almonds",
        "apples", "archery", "art", "august", "autumn", "bagels", "balloons", "bamboo", "bananas", "banks", "barns", "baseball",
        "basketball", "baskets", "batteries", "battleships", "bbq", "beads", "beans", "beards", "beds", "bedtime", "benches", "bicycles",
        "bikes", "biology", "birthdays", "blankets", "blenders", "blizzards", "blogs", "boats", "books", "boots", "bottles", "bowling",
        "bowls", "boxes", "brazil", "bread", "breakfast", "bricks", "bridges", "broccoli", "brownies", "bubbles", "buffets", "buildings",
        "butter", "butterscotch", "buttons", "cabbages", "cabinets", "cabins", "cables", "cake", "calendars", "cameras", "camping",
        "candles", "candy", "cannons", "cans", "canyons", "cards", "carpet", "carrots", "cars", "caves", "ceilings", "celery", "cereal",
        "chairs", "checkers", "cheddar", "cheese", "cherries", "chess", "chestnuts", "chicago", "chili", "chips", "chocolate", "chores",
        "chrome", "circles", "cities", "clocks", "clones", "clothes", "clothing", "clouds", "coaches", "coaching", "coal", "coats",
        "coconuts", "coffee", "coins", "cola", "cold", "college", "colorado", "colors", "combat", "comics", "computers", "concrete",
        "confetti", "conflict", "cookies", "cooking", "corn", "couches", "coupons", "creeks", "cuba", "cupcakes", "cups", "curtains",
        "cushions", "dallas", "dancing", "danger", "dark", "daytime", "december", "democracy", "denver", "desks", "detroit", "diamonds",
        "diary", "dirt", "dishes", "dodgeball", "donuts", "doom", "doorbells", "doors", "doorways", "dreams", "driveways", "driving",
        "drones", "drums", "drumsticks", "dust", "earrings", "earthquakes", "eating", "eggs", "egypt", "electricity", "electronics",
        "elevators", "email", "emergencies", "everything", "fall", "falling", "fallout", "fame", "fans", "farms", "feet", "fences",
        "fields", "fighting", "films", "finland", "fire", "firewalls", "fireworks", "flags", "floors", "flowers", "flutes", "flying",
        "foam", "folders", "food", "football", "forests", "forks", "forts", "friday", "frosting", "fruit", "fudge", "games", "gaming",
        "garages", "gardens", "garlic", "germany", "glass", "glasses", "gloves", "glue", "gold", "golf", "gps", "grain", "grapefruit",
        "grapes", "gravity", "greed", "green", "guitars", "gum", "hair", "haircuts", "halloween", "halo", "hamburgers", "hammers", "hats",
        "headaches", "heat", "hiking", "hills", "hiphop", "history", "hobbies", "hockey", "holidays", "honey", "hospitals", "hotsauce",
        "houses", "houston", "hunting", "ice", "icecream", "indoors", "industry", "iron", "islands", "jackets", "japan", "jars", "jazz",
        "jeans", "jello", "jokes", "journals", "juggling", "jukeboxes", "july", "jumping", "june", "jungles", "kansas", "karate", "ketchup",
        "keyboards", "keys", "kickboxing", "kindness", "kitchens", "kites", "knives", "ladders", "lakes", "lamps", "laptops", "lasers",
        "laughter", "lava", "lawns", "lawschool", "lemons", "letters", "lettuce", "libaries", "libraries", "light", "lightbulbs",
        "lipstick", "locks", "london", "lotteries", "lumber", "lunch", "machines", "magazines", "mail", "makeup", "mario", "markets",
        "marshes", "math", "meat", "medicine", "melons", "memphis", "metal", "miami", "milk", "minecraft", "mirrors", "mistakes", "monday",
        "money", "mountains", "movies", "mud", "museums", "mushrooms", "music", "musicals", "mustard", "myths", "nachos", "napkins",
        "networks", "newspapers", "night", "nintendo", "noises", "noodles", "notebooks", "november", "numbers", "nutmeg", "oatmeal",
        "oceans", "october", "offices", "ohio", "oil", "olives", "onions", "opera", "oranges", "orlando", "outdoors", "ovens", "packages",
        "paint", "paintball", "paintings", "pancakes", "paper", "parking", "parks", "passports", "passwords", "pasta", "pastries",
        "pavement", "peanuts", "pearls", "pears", "pencils", "pens", "pepper", "phones", "photos", "physics", "pianos", "pickles", "pie",
        "pillows", "pinball", "pineapples", "pizza", "plants", "plastic", "plates", "playstation", "playtime", "plums", "poker", "politics",
        "ponds", "popcorn", "portal", "portland", "postcards", "posters", "potatoes", "pretzels", "printers", "promises", "propane",
        "pudding", "pumpkins", "punkrock", "purple", "purses", "puzzles", "pyramids", "quake", "quicksand", "quilts", "racing", "radios",
        "railroad", "rain", "ramps", "reading", "reality", "rectangles", "recycling", "red", "revenge", "rice", "rings", "rivers", "roads",
        "roadtrips", "rocks", "rollercoasters", "rope", "rowboats", "rubber", "rugby", "running", "runways", "russia", "safety", "salad",
        "salsa", "salt", "sand", "sandals", "Saturday", "schedules", "school", "science", "scissors", "seafood", "seattle", "shampoo",
        "shelves", "shirts", "shoes", "shopping", "shows", "sidewalks", "silver", "singing", "sinks", "skating", "sleeping", "sneakers",
        "snow", "soap", "soccer", "socks", "soda", "sofas", "softball", "software", "sonic", "soup", "soybeans", "spaghetti", "spatulas",
        "speakers", "speaking", "spheres", "spices", "spinach", "sponges", "spoons", "sports", "spring", "sprinkles", "squares", "stairs",
        "starcraft", "steaks", "steam", "steel", "stereos", "stickers", "stones", "stores", "storms", "stoves", "strangers", "studying",
        "submarines", "subways", "sugar", "suitcases", "sunday", "sunflowers", "sunlight", "sunshine", "supermarkets", "surfing",
        "surprises", "swamps", "sweaters", "swimming", "tables", "tablets", "tacos", "talking", "taxes", "teaching", "tech", "television",
        "tennis", "tents", "tetris", "texas", "thursday", "tickets", "time", "tires", "toast", "today", "togas", "tomatoes", "toothpaste",
        "tornados", "towels", "towers", "towns", "toys", "traffic", "trails", "trains", "trash", "trees", "triangles", "trivia", "trophies",
        "trucks", "trumpets", "tuesday", "tunnels", "uniforms", "unrest", "utah", "vacations", "vacuums", "valve", "vanilla", "vegtables",
        "villages", "vinegar", "voicemail", "volleyball", "waffles", "wagons", "walking", "wallets", "walls", "war", "warcraft", "waste",
        "watches", "water", "waterfalls", "wax", "weather", "websites", "wednesday", "wheat", "wheels", "wind", "windows", "winter",
        "wires", "wood", "work", "working", "wrestling", "xbox", "yearbooks", "yellow", "yesterday", "yoga", "yogurt", "zelda", "zippers"];

    /** Get a random value from an array */
    private static GetRandomArrayValue(arrayIn: any[]) {
        return arrayIn[Math.floor(Math.random() * arrayIn.length)];
    }

    /** Get a random boolean value */
    private static GetRandomBoolean(): boolean {
        return !!(Math.random() < .5);
    }

    /** Get a random number between low and high */
    private static GetRandomInt(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low) + low);
    }
}

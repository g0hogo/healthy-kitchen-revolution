import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  CircleHelp,
  Clock3,
  Coffee,
  Facebook,
  Flame,
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  Printer,
  Recycle,
  Search,
  Share2,
  Sprout,
  SunMedium,
  Utensils,
  X,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";

const gardenImage = "/garden_2fa973e0.jpeg";
const cookingImage = "/cooking_ad947525.jpg";
const compostImage = "/compost_f274c10e.png";


const navItems = [
  { label: "The why", href: "#why" },
  { label: "Garden", href: "#garden" },
  { label: "Cooking", href: "#cooking" },
  { label: "Zero waste", href: "#zero-waste" },
];

const topicCards = [
  {
    number: "01",
    tag: "Grow something",
    title: "Kitchen Garden",
    description: "A windowsill, balcony or sunny corner is enough to grow your first harvest.",
    href: "#garden",
    image: gardenImage,
    accent: "sage",
    icon: Sprout,
  },
  {
    number: "02",
    tag: "Cook with care",
    title: "Oil-Smart Cooking",
    description: "Build deep flavour with steam, spice, heat and a little more intention.",
    href: "#cooking",
    image: cookingImage,
    accent: "gold",
    icon: Utensils,
  },
  {
    number: "03",
    tag: "Use it all",
    title: "Zero Waste Kitchen",
    description: "Give scraps a second life and turn everyday leftovers into useful habits.",
    href: "#zero-waste",
    image: compostImage,
    accent: "clay",
    icon: Recycle,
  },
];

const gardenBenefits = [
  "Provides fresh herbs and vegetables",
  "Reduces dependence on packaged produce",
  "Saves money",
  "Makes use of small spaces",
  "Reduces plastic packaging",
  "Encourages healthy eating",
  "Improves connection with nature",
  "Provides a relaxing family activity",
  "Teaches children how food grows",
];

const gardenLocations = [
  "A balcony",
  "A terrace",
  "A windowsill",
  "A backyard",
  "A rooftop",
  "A vertical wall planter",
  "Hanging pots",
  "Recycled buckets or containers",
  "Grow bags",
  "Indoor spaces with enough sunlight",
];

const gardenMaterials = [
  "Pots, containers or grow bags",
  "Garden soil",
  "Compost or vermicompost",
  "Cocopeat",
  "Sand or perlite",
  "Seeds or seedlings",
  "Watering can or spray bottle",
  "Gardening gloves",
  "Small hand shovel",
  "Plant labels",
  "Support sticks for climbing plants",
];

const plants = [
  ["Mint", "Pot or hanging container", "3–5 hours", "Keep soil slightly moist", "3–4 weeks"],
  ["Coriander", "Shallow pot", "4–6 hours", "Water lightly", "3–4 weeks"],
  ["Green chili", "Medium or large pot", "6–8 hours", "When top soil is dry", "2–3 months"],
  ["Tomato", "Large pot or grow bag", "6–8 hours", "Regularly, without waterlogging", "2–3 months"],
  ["Spinach", "Shallow container", "3–5 hours", "Keep soil moist", "3–5 weeks"],
  ["Fenugreek", "Shallow pot", "4–6 hours", "Light watering", "2–3 weeks"],
  ["Basil", "Medium pot", "5–6 hours", "When soil begins to dry", "4–6 weeks"],
  ["Lettuce", "Shallow container", "4–6 hours", "Keep soil moist", "4–8 weeks"],
  ["Radish", "Deep container", "5–6 hours", "Regularly", "4–6 weeks"],
  ["Spring onion", "Pot or water container", "4–6 hours", "Keep roots moist", "2–4 weeks"],
  ["Curry leaves", "Large pot", "5–7 hours", "When soil is dry", "Regular leaf harvesting"],
  ["Beans", "Large pot with support", "6–8 hours", "Regularly", "2–3 months"],
];

const plantingSteps = [
  "Select a container with drainage holes.",
  "Fill the container with the soil mixture.",
  "Make small holes according to the seed packet instructions.",
  "Place the seeds in the holes.",
  "Cover them lightly with soil.",
  "Spray water gently.",
  "Place the container in suitable sunlight.",
  "Keep the soil slightly moist.",
  "Remove weak or overcrowded seedlings.",
  "Move seedlings to larger pots when necessary.",
];

const gardenScrapMethods = [
  { title: "Spring Onions", steps: ["Keep the white root portion.", "Place it in water or moist soil.", "Keep it near sunlight.", "Change the water regularly if growing it in water.", "Cut the green leaves and allow the roots to continue growing."] },
  { title: "Mint", steps: ["Cut a healthy mint stem.", "Remove the lower leaves.", "Place the stem in water until roots appear.", "Transfer it to soil."] },
  { title: "Potato", steps: ["Use a healthy potato with small sprouts.", "Cut it into pieces with at least one sprout.", "Allow the cut surface to dry.", "Plant it in a deep container."] },
  { title: "Tomato", steps: ["Save seeds from a healthy tomato, wash and dry them, then plant them in fertile soil."] },
];

const wateringInstructions = [
  "Water early in the morning or evening.",
  "Check the soil before watering.",
  "Do not water if the soil is already wet.",
  "Avoid waterlogging.",
  "Use containers with drainage holes.",
  "Water the soil rather than constantly wetting the leaves.",
  "Reuse clean water from washing vegetables for plants.",
];

const naturalFertilizers = [
  "Vermicompost",
  "Mature compost",
  "Well-decomposed animal manure",
  "Compost tea",
  "Dried and crushed eggshells",
  "Small amounts of dried tea leaves",
  "Diluted rice-washing water",
];

const pestControls = [
  "Remove insects by hand.",
  "Remove badly damaged leaves.",
  "Keep plants spaced apart.",
  "Keep the garden area clean.",
  "Use a mild neem-water spray where appropriate.",
  "Avoid excessive watering.",
  "Encourage helpful insects such as bees and ladybirds.",
  "Do not spray chemicals directly before harvesting.",
];

const gardeningMistakes = [
  "Using containers without drainage holes",
  "Overwatering",
  "Keeping plants in unsuitable sunlight",
  "Planting too many plants in one pot",
  "Using poor-quality soil",
  "Ignoring pests",
  "Harvesting too aggressively",
  "Not supporting climbing plants",
];

const cookingLocations = [
  "In a normal kitchen",
  "On a stovetop",
  "In a pressure cooker",
  "In a steamer",
  "In an oven",
  "In an air fryer",
  "In a microwave where suitable",
  "In a non-stick or well-seasoned pan",
];

const cookingMethods = [
  { title: "Steaming", description: "Use a steamer or a covered vessel with a steaming rack. This method is suitable for:", items: ["Vegetables", "Idli", "Dumplings", "Fish", "Some snacks"] },
  { title: "Boiling", description: "Boil ingredients in water or vegetable stock. This is suitable for:", items: ["Lentils", "Potatoes", "Vegetables", "Pasta", "Eggs", "Grains"] },
  { title: "Baking", description: "Bake food in an oven using a tray lined with baking paper. This is suitable for:", items: ["Vegetables", "Chickpeas", "Potatoes", "Homemade snacks", "Bread", "Casseroles"] },
  { title: "Air Frying", description: "Air fry food in an air fryer. Many foods can be prepared without oil or with only a very small amount.", items: [] },
  { title: "Pressure Cooking", description: "Pressure cooking is useful for:", items: ["Dal", "Beans", "Rice", "Vegetables", "Soups", "Stews"] },
  { title: "Water Sautéing", description: "Heat a suitable pan, add two or three tablespoons of water or vegetable stock, then add onions, garlic or vegetables. Stir regularly, adding small amounts of water if the pan becomes dry. Add herbs and spices for flavor.", items: [] },
];

const recipes = [
  {
    number: "01", title: "Oil-Free Vegetable Soup", prep: "10 min", cook: "25 min", servings: "2–3",
    ingredients: ["One chopped carrot", "One chopped tomato", "One cup chopped cabbage", "One chopped onion", "Two cups water or vegetable stock", "Ginger", "Garlic", "Salt", "Black pepper"],
    instructions: ["Add all ingredients to a pot.", "Cook until the vegetables become soft.", "Add salt and black pepper.", "Blend if a smooth soup is preferred.", "Serve hot."],
    tip: "Use vegetable stock and fresh herbs to deepen flavour without adding oil.",
  },
  {
    number: "02", title: "Steamed Vegetables", prep: "10 min", cook: "5–10 min", servings: "2",
    ingredients: ["Carrot", "Beans", "Broccoli", "Corn", "Lemon juice", "Salt", "Black pepper"],
    instructions: ["Wash and cut the vegetables.", "Place them in a steamer.", "Steam for approximately 5–10 minutes.", "Add lemon juice, salt and pepper.", "Serve immediately."],
    tip: "Steam only until tender-crisp so the vegetables keep their colour and texture.",
  },
  {
    number: "03", title: "Oil-Free Vegetable Dal", prep: "10 min", cook: "30 min", servings: "3–4",
    ingredients: ["One cup lentils", "Two cups water", "Chopped tomato", "Chopped onion", "Ginger", "Garlic", "Turmeric", "Salt", "Coriander leaves"],
    instructions: ["Wash the lentils.", "Cook them with water and turmeric.", "Add tomato, onion, ginger and garlic.", "Cook until soft.", "Add salt and coriander leaves.", "Serve with rice or flatbread."],
    tip: "Cook aromatics with a splash of water or stock before adding the lentils.",
  },
  {
    number: "04", title: "Oil-Free Roasted Chickpeas", prep: "10 min", cook: "20–30 min", servings: "2",
    ingredients: ["One cup cooked chickpeas", "Salt", "Black pepper", "Paprika or other spices", "Lemon juice"],
    instructions: ["Drain and dry the chickpeas.", "Add the spices.", "Place them in an air fryer or oven.", "Cook until crispy.", "Add lemon juice before serving."],
    tip: "Dry chickpeas well before roasting for the best crisp texture without oil.",
  },
  {
    number: "05", title: "Steamed Idli", prep: "10 min", cook: "12–15 min", servings: "3–4",
    ingredients: ["Idli batter made from rice and lentils"],
    instructions: ["Pour batter into lightly moistened idli moulds.", "Steam until firm.", "Serve with vegetable sambar or chutney."],
    tip: "Lightly moisten the moulds so the idli releases easily without needing oil.",
  },
  {
    number: "06", title: "Baked Vegetables", prep: "15 min", cook: "30–40 min", servings: "3–4",
    ingredients: ["Potato", "Carrot", "Pumpkin", "Bell pepper", "Onion", "Salt", "Black pepper", "Garlic", "Mixed herbs"],
    instructions: ["Cut vegetables into similar-sized pieces.", "Mix with herbs and spices.", "Place on a baking tray.", "Bake until tender.", "Serve warm."],
    tip: "Line the tray with baking paper and leave space between pieces so they roast instead of steam.",
  },
  {
    number: "07", title: "Oil-Free Oats and Vegetable Porridge", prep: "10 min", cook: "15 min", servings: "2",
    ingredients: ["Oats", "Carrot", "Peas", "Corn", "Onion", "Water or vegetable stock", "Salt", "Pepper"],
    instructions: ["Add vegetables and water to a pot.", "Cook until slightly soft.", "Add oats.", "Cook until the mixture thickens.", "Add salt and pepper."],
    tip: "Vegetable stock adds savoury depth while keeping the porridge oil-free.",
  },
  {
    number: "08", title: "Healthy Salad Bowl", prep: "15 min", cook: "0 min", servings: "2",
    ingredients: ["Cucumber", "Tomato", "Carrot", "Lettuce", "Boiled chickpeas", "Corn", "Lemon juice", "Herbs"],
    instructions: ["Wash and cut all ingredients.", "Add them to a bowl.", "Add lemon juice and herbs.", "Mix and serve immediately."],
    tip: "Use whatever fresh vegetables are already available so the salad helps prevent waste too.",
  },
  {
    number: "09", title: "Oil-Free Vegetable Dumplings", prep: "25 min", cook: "10–15 min", servings: "3–4",
    ingredients: ["Dumpling dough made with flour and water", "Chopped vegetables", "Ginger", "Garlic", "Spices"],
    instructions: ["Prepare dumpling dough with flour and water.", "Fill it with chopped vegetables, ginger, garlic and spices.", "Steam the dumplings until cooked."],
    tip: "Steam in batches and keep the lid closed so the wrappers cook evenly.",
  },
  {
    number: "10", title: "Leftover Rice Pancakes", prep: "15 min", cook: "10 min", servings: "2–3",
    ingredients: ["One cup cooked rice", "Half a cup rice flour", "Chopped onion", "Chopped coriander", "Salt", "Water"],
    instructions: ["Mash the cooked rice.", "Add rice flour, onion, coriander and salt.", "Add water to make a thick batter.", "Cook on a good-quality non-stick pan.", "Use water instead of oil if necessary.", "Cook both sides thoroughly."],
    tip: "Cool leftover rice quickly, store it covered in the refrigerator and reheat it thoroughly before eating.",
  },
];

const flavorOptions = ["Lemon juice", "Ginger", "Garlic", "Black pepper", "Turmeric", "Cumin", "Coriander", "Mint", "Basil", "Chilli", "Vegetable stock", "Roasted spices"];

const faqs = [
  {
    question: "Do I need a backyard to start a kitchen garden?",
    answer: "Not at all. Begin with a sunny windowsill, balcony railing, hanging pot or one recycled container. Mint, coriander, basil and spring onion are friendly first plants.",
  },
  {
    question: "How can I cook with little or no oil without food sticking?",
    answer: "Use a good heavy pan, preheat it, add a splash of water or stock, and cook aromatics in small additions. Steaming, roasting and pressure cooking also build flavour without relying on oil.",
  },
  {
    question: "What belongs in a home compost bin?",
    answer: "Fruit and vegetable scraps, coffee grounds, tea leaves, eggshells, dry leaves and shredded uncoated paper work well. Keep meat, dairy, oily food and glossy paper out of a simple home bin.",
  },
  {
    question: "What is the easiest first change to make this week?",
    answer: "Choose one: grow a herb, replace one oil-heavy technique with steaming, or keep a small scrap bowl beside your chopping board. Tiny habits become a kitchen culture when they are easy to repeat.",
  },
];

const wasteRules = [
  { number: "1", title: "Refuse", description: "Avoid items that are unnecessary, such as:", items: ["Single-use plastic spoons", "Plastic straws", "Extra food packaging", "Disposable cups and plates", "Small sachets that cannot be recycled"], example: "Carry a reusable water bottle and shopping bag instead of buying bottled water and accepting plastic bags." },
  { number: "2", title: "Reduce", description: "Buy and use only what is needed.", items: ["Plan meals before shopping.", "Buy loose vegetables instead of individually wrapped vegetables.", "Choose larger refill packs when appropriate.", "Cook the correct quantity of food.", "Avoid buying food only because it is on sale."], example: "If you already have rice, lentils and vegetables at home, plan a rice-and-dal meal instead of buying another ready-made meal." },
  { number: "3", title: "Reuse", description: "Use food and containers again in useful ways.", items: ["Use glass jars to store spices.", "Use cardboard boxes to organize cupboards.", "Use clean takeaway containers for dry food.", "Use vegetable stems in soups.", "Use leftover rice in pancakes.", "Use old cloth pieces as kitchen cleaning cloths."], example: "Look at a container or food part twice before deciding it is waste." },
  { number: "4", title: "Recycle", description: "Separate clean, dry recyclable materials from food waste.", items: ["Paper and cardboard", "Glass bottles", "Metal cans", "Clean plastic containers", "Aluminium foil, if accepted by your local recycling service"], example: "Wash and dry containers before placing them in recycling. Local recycling rules may differ, so follow the rules in your area." },
  { number: "5", title: "Rot", description: "Compost suitable organic waste and turn it into natural fertilizer.", items: ["Fruit and vegetable scraps", "Dry leaves", "Eggshells", "Coffee grounds", "Small amounts of used tea leaves", "Uncooked plant-based food scraps"], example: "Keep a small, ventilated scrap container close to the chopping board." },
];

const planningSteps = [
  "Check the refrigerator, freezer and cupboards.",
  "Make a list of food already available.",
  "Plan meals for the next few days.",
  "Write down only the items you need.",
  "Check the quantity before buying.",
  "Avoid buying duplicate products.",
];

const portionTips = [
  "Cook one cup of rice for a small family instead of cooking much more than needed.",
  "Serve small portions first and allow people to take more if required.",
  "Keep extra food separately before serving so it is not contaminated.",
  "Use measuring cups for rice, pasta and lentils.",
];

const fifoTips = [
  "Put yesterday’s cooked vegetables in front.",
  "Put newly cooked food behind them.",
  "Check older food before opening a new packet.",
];

const vegetablePeelUses = [
  "Carrot peels: Add to vegetable stock.",
  "Potato peels: Bake until crisp after washing and drying.",
  "Bottle gourd or squash peels: Cook into chutney or stir-fry where suitable.",
  "Broccoli stems: Peel the tough outer layer and add the inner portion to soup.",
  "Cauliflower leaves: Add to curry, soup or stir-fried vegetables.",
  "Radish leaves: Use in soup, dal or vegetable curry.",
  "Beetroot leaves: Add to cooked vegetables or soup.",
];

const stockSteps = [
  "Wash vegetable scraps thoroughly.",
  "Use clean scraps such as carrot ends, onion layers, celery ends and herb stems.",
  "Place them in a pot with water.",
  "Add ginger, garlic or herbs if desired.",
  "Simmer for 30–45 minutes.",
  "Strain the liquid.",
  "Use the stock in soup, dal, rice, noodles or sauces.",
  "Refrigerate and use promptly, or freeze in small containers.",
];

const citrusUses = ["Adding flavour to water", "Flavouring tea or desserts", "Making citrus-infused vinegar", "Adding to compost", "Natural fragrance"];
const citrusVinegarSteps = [
  "Fill a clean jar with washed orange or lemon peels.",
  "Add white vinegar until the peels are covered.",
  "Close the jar and leave it for approximately 1–2 weeks.",
  "Strain the liquid.",
  "Dilute it with water before cleaning suitable hard surfaces.",
  "Label the bottle clearly.",
];
const staleBreadSteps = ["Cut stale bread into pieces.", "Dry it completely.", "Toast or bake until crisp.", "Cool it.", "Crush or blend into crumbs.", "Store in an airtight container."];
const breadcrumbUses = ["Vegetable cutlets", "Baked toppings", "Coating vegetables", "Thickening soup", "Stuffed dishes"];
const otherBreadUses = ["Croutons for soup and salad", "Bread pudding", "Toasted snacks", "French toast, if the bread is still safe to eat"];
const bananaUses = ["Smoothies", "Pancakes", "Banana bread", "Oatmeal", "Muffins", "Homemade frozen desserts"];
const leftoverRiceUses = ["Rice pancakes", "Fried-style rice using water sautéing", "Rice salad", "Stuffed vegetables", "Rice soup", "Rice pudding", "Vegetable rice patties"];
const leftoverDalUses = ["Dal soup", "Dal pancakes", "Flatbread dough", "Vegetable curry", "Dal rice", "Stuffed flatbread filling"];
const vegetableParts = [
  ["Broccoli stem", "Soup, stir-fry or grated salad"],
  ["Cauliflower leaves", "Curry, soup or stir-fry"],
  ["Coriander stems", "Chutney, stock or soup"],
  ["Mint stems", "Chutney, tea or infused water"],
  ["Radish leaves", "Dal, soup or vegetable curry"],
  ["Beetroot leaves", "Stir-fry or soup"],
  ["Carrot tops", "Herb sauce or compost"],
  ["Spring onion roots", "Regrowing in water or soil"],
];
const herbUses = ["Chutney", "Soup", "Vegetable stock", "Pasta sauce", "Herb water", "Salad dressing"];
const herbChutneyIngredients = ["Clean coriander stems and leaves", "Mint leaves", "Lemon juice", "Ginger", "Green chilli, if desired", "A little water", "Salt"];

const fridgeStorage = ["Keep cooked food in clean, covered containers.", "Label containers with the date.", "Place older food at the front.", "Store raw and cooked food separately.", "Do not overload the refrigerator.", "Keep the refrigerator at a safe temperature.", "Check stored food regularly."];
const freezingFoods = ["Chopped vegetables", "Cooked beans", "Bread", "Fruits for smoothies", "Vegetable stock", "Leftover soup", "Chopped herbs"];
const herbWaterSteps = ["Trim the herb stems.", "Place them in a glass with a small amount of water.", "Cover loosely with a clean bag.", "Store in the refrigerator where suitable."];
const herbFreezeSteps = ["Wash and dry the herbs.", "Chop them.", "Place them in an ice tray.", "Add water or vegetable stock.", "Freeze and use in soups or cooking."];
const dryFoodStorage = ["Clean airtight containers", "Dry cupboards", "Clearly labelled jars"];
const leftoverSafety = ["Refrigerate leftovers promptly.", "Store food in covered containers.", "Reheat only the amount you plan to eat.", "Reheat food thoroughly.", "Do not repeatedly cool and reheat the same food.", "Check food for unusual smell, colour, texture or mould.", "When in doubt, throw it out.", "Follow local food-safety guidance.", "Do not taste food that appears spoiled to check whether it is safe."];

const compostGreen = ["Fruit scraps", "Vegetable scraps", "Fresh leaves", "Coffee grounds", "Small amounts of fresh plant material"];
const compostBrown = ["Dry leaves", "Shredded plain cardboard", "Uncoated paper", "Small twigs", "Sawdust from untreated wood"];
const compostSteps = ["Choose a ventilated container or compost bin.", "Add a layer of dry leaves or shredded cardboard.", "Add fruit and vegetable scraps.", "Cover the scraps with dry material.", "Repeat the layers.", "Keep the compost slightly moist.", "Turn or mix it regularly.", "Allow air to circulate.", "Wait until the compost becomes dark and soil-like.", "Add the finished compost to garden soil."];
const compostAvoid = ["Plastic", "Glass", "Metal", "Batteries", "Chemicals", "Medicines", "Diseased plants", "Large amounts of oil", "Large amounts of salty food", "Pet waste", "Meat, fish or dairy unless using a suitable managed system"];
const wetWaste = ["Fruit peels", "Vegetable scraps", "Leftover plant-based food", "Tea leaves", "Coffee grounds", "Eggshells"];
const dryWaste = ["Paper", "Cardboard", "Glass", "Metal", "Clean plastic", "Packaging materials"];
const creativeReuse = [
  { title: "Glass Jars", items: ["Spices", "Lentils", "Seeds", "Homemade sauces", "Leftovers", "Kitchen decorations"], note: "Wash and dry jars before reuse." },
  { title: "Cardboard Boxes", items: ["Drawer dividers", "Cupboard organization", "Seed storage", "Compost browns", "Craft projects"], note: "Do not compost cardboard containing plastic coating, glossy finishes or chemical contamination." },
  { title: "Old Cloth", items: ["Cleaning cloths", "Reusable napkins", "Dish-drying cloths", "Produce bags", "Pot holders, if safely prepared"], note: "Choose clean cotton clothing or towels." },
  { title: "Coconut Shells", items: ["Small plant containers", "Bird-feeding bowls", "Decorative storage", "Craft materials"], note: "Make drainage holes if using a coconut shell as a planter." },
];
const challenge = [
  ["Day 1", "Check Your Kitchen", "Check the refrigerator, freezer and cupboards. Identify food that should be used soon."],
  ["Day 2", "Plan Meals", "Create meals using ingredients already available."],
  ["Day 3", "Reuse Leftovers", "Turn leftover rice, dal, bread or vegetables into a new meal."],
  ["Day 4", "Separate Waste", "Set up separate containers for compostable, recyclable and other waste."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionLabel({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-lede">{body}</p>}
    </div>
  );
}

function BulletList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return <ul className={`content-list ${columns ? "content-list-columns" : ""}`}>{items.map((item) => <li key={item}><span>✦</span>{item}</li>)}</ul>;
}

function NumberedList({ items }: { items: string[] }) {
  return <ol className="numbered-list">{items.map((item, index) => <li key={`${index}-${item}`}><span>{index + 1}</span><p>{item}</p></li>)}</ol>;
}

function ContentDisclosure({ title, children, open = false }: { title: string; children: React.ReactNode; open?: boolean }) {
  return <details className="content-disclosure" open={open}><summary><span>{title}</span><ChevronDown size={17} /></summary><div className="disclosure-body">{children}</div></details>;
}

function RecipeCard({ recipe }: { recipe: typeof recipes[number] }) {
  return <article className="recipe-card"><div className="recipe-top"><span className="recipe-number">{recipe.number}</span><h3>{recipe.title}</h3></div><div className="recipe-meta"><span><Clock3 size={13} /> Prep {recipe.prep}</span><span><Flame size={13} /> Cook {recipe.cook}</span><span><Utensils size={13} /> Serves {recipe.servings}</span></div><div className="recipe-columns"><div><p className="mini-heading">Ingredients</p><BulletList items={recipe.ingredients} /></div><div><p className="mini-heading">Method</p><NumberedList items={recipe.instructions} /></div></div><div className="recipe-tip"><BadgeCheck size={15} /><span><strong>Healthy tip</strong>{recipe.tip}</span></div></article>;
}

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const searchableSections = useMemo(
    () => [
      { terms: ["garden", "grow", "plant", "soil", "mint", "tomato", "seed", "pest"], id: "garden", label: "Kitchen Garden" },
      { terms: ["cook", "oil", "food", "recipe", "pan", "steam", "dal", "soup"], id: "cooking", label: "Oil-Smart Cooking" },
      { terms: ["waste", "compost", "scrap", "reuse", "leftover", "recycle", "storage"], id: "zero-waste", label: "Zero Waste Kitchen" },
      { terms: ["faq", "question", "help"], id: "faq", label: "Frequently asked questions" },
    ],
    [],
  );

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = () => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) {
      setSearchMessage("Try searching for garden, oil, compost or leftovers.");
      return;
    }
    const result = searchableSections.find((section) => section.terms.some((term) => term.includes(query) || query.includes(term)));
    if (result) {
      setSearchMessage(`Taking you to ${result.label}.`);
      scrollToId(result.id);
      setMobileMenuOpen(false);
    } else {
      setSearchMessage("No exact match yet — try garden, cooking, compost or waste.");
    }
  };

  const sharePage = async () => {
    const shareData = {
      title: "The Healthy Kitchen Revolution",
      text: "Small kitchen changes for healthier families and a healthier planet.",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied — share the revolution.");
      }
    } catch {
      toast("Sharing cancelled");
    }
  };

  return (
    <div className="site-shell">
      <div className="topline"><span>Small steps. Deep roots.</span><span className="topline-dot" /><span>A practical guide by Dr. Aditi Sharma</span></div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Healthy Kitchen Revolution home" onClick={() => setMobileMenuOpen(false)}>
          <span className="brand-mark"><Leaf size={19} strokeWidth={2.5} /></span>
          <span><strong>The Healthy Kitchen</strong><em>Revolution</em></span>
        </a>
        <nav className={`site-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>)}
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button header-share" onClick={sharePage} aria-label="Share this guide"><Share2 size={18} /></button>
          <button className="menu-button" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-noise" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light"><span />A softer way forward</p>
              <h1>The kitchen is where <span>change</span> begins.</h1>
              <p className="hero-intro">Welcome to The Healthy Kitchen Revolution, a practical guide to growing fresh food at home, preparing healthy meals with little or no oil, and reducing food waste. Small changes in our kitchens can improve our health, save money and protect the environment.</p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#pathways">Explore the guide <ArrowDownRight size={17} /></a>
                <button className="text-button light-text" onClick={() => window.print()}><Printer size={16} /> Print this guide</button>
              </div>
              <div className="hero-proof"><span className="avatar-stack"><i>AS</i><i>✦</i><i>+</i></span><span><strong>Made for real kitchens</strong><small>Whether you have one pot or a whole balcony.</small></span></div>
            </div>
            <div className="hero-visual" aria-label="Fresh herbs growing in a home garden">
              <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
              <div className="hero-image-frame"><img src={gardenImage} alt="A bright home garden with pots of herbs and vegetables" /></div>
              <div className="hero-note note-sun"><SunMedium size={17} /><span>Make room for<br /><strong>something green</strong></span></div>
              <div className="hero-note note-harvest"><span className="note-number">01</span><span><strong>First harvest</strong><small>can start in 3 weeks</small></span></div>
              <div className="hero-leaf-decor decor-one">✦</div><div className="hero-leaf-decor decor-two">✳</div>
            </div>
          </div>
          <div className="hero-ribbon"><div className="container ribbon-inner"><span>GROW</span><i>✦</i><span>COOK</span><i>✦</i><span>COMPOST</span><i>✦</i><span>REPEAT</span><i>✦</i><span>GROW</span></div></div>
        </section>

        <section className="welcome-section" id="why">
          <div className="container welcome-grid">
            <div className="welcome-stamp"><span>THE</span><strong>GOOD<br />FOOD<br />LOOP</strong><i>Since today</i></div>
            <div className="welcome-copy"><SectionLabel eyebrow="A kitchen with a point of view" title="Healthy kitchens create healthy families — and a healthier planet." body="Welcome to The Healthy Kitchen Revolution, a practical guide to growing fresh food at home, preparing healthy meals with little or no oil, and reducing food waste. Small changes in our kitchens can improve our health, save money and protect the environment." /><a className="inline-link" href="#pathways">Start with one small shift <ArrowRight size={16} /></a></div>
            <div className="welcome-stat"><span>3</span><p>simple ways to turn your kitchen into a place of abundance</p></div>
          </div>
        </section>

        <section className="pathways-section" id="pathways">
          <div className="container">
            <div className="pathways-top"><SectionLabel eyebrow="Choose your starting point" title="Three doors into a better kitchen." /><div className="search-wrap"><Search size={17} /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} onKeyDown={(event) => event.key === "Enter" && handleSearch()} placeholder="Search the guide" aria-label="Search the guide" /><button onClick={handleSearch}>Go</button>{searchMessage && <span className="search-message" role="status">{searchMessage}</span>}</div></div>
            <div className="topic-grid">{topicCards.map((card) => { const Icon = card.icon; return <a className={`topic-card topic-${card.accent}`} href={card.href} key={card.title}><div className="topic-image"><img src={card.image} alt="" /><div className="topic-number">{card.number}</div><div className="topic-icon"><Icon size={19} /></div></div><div className="topic-content"><p className="card-tag">{card.tag}</p><h3>{card.title}</h3><p>{card.description}</p><span className="card-arrow"><ArrowRight size={17} /></span></div></a>; })}</div>
          </div>
        </section>

        <section className="chapter-section garden-section" id="garden">
          <div className="container">
            <div className="chapter-intro"><div className="chapter-index">01 <span>/ 03</span></div><SectionLabel eyebrow="Grow something" title="Kitchen Garden" body="A kitchen garden is a small garden where herbs, vegetables and fruits are grown at home. It can be created on a balcony, terrace, windowsill, backyard or any place that receives suitable sunlight." /><div className="chapter-action"><span>Good to know</span><p>Every container must have drainage holes so excess water can escape.</p></div></div>
            <div className="garden-feature"><div className="feature-image tall-image"><img src={gardenImage} alt="Potted herbs and vegetables growing in a home garden" /><span className="image-caption">A little sunlight goes a long way.</span></div><div className="feature-copy"><p className="eyebrow"><span />Start small</p><h3>Let the first pot<br /><em>teach you.</em></h3><p>Choose a safe place that receives sunlight and has access to water. Make sure water drainage does not damage walls or floors. Growing times vary according to climate, seed quality and care.</p><div className="benefit-list"><div><BadgeCheck size={17} /><span>Fresh herbs and vegetables</span></div><div><BadgeCheck size={17} /><span>Less packaging and more savings</span></div><div><BadgeCheck size={17} /><span>A relaxing family activity</span></div><div><BadgeCheck size={17} /><span>A connection with nature</span></div></div><a className="inline-link" href="#plant-guide">See the beginner plant guide <ArrowRight size={16} /></a></div></div>
            <div className="garden-lower"><div className="soil-card"><div className="soil-card-top"><div><p className="card-tag">A simple recipe for soil</p><h3>The balanced mix</h3></div><Sprout size={27} /></div><p className="muted-copy">Mix the ingredients well. The soil should be loose, fertile and able to drain water.</p><div className="soil-bars"><div className="soil-bar bar-soil"><span>40%</span><strong>Garden soil</strong></div><div className="soil-bar bar-compost"><span>30%</span><strong>Compost</strong></div><div className="soil-bar bar-coco"><span>20%</span><strong>Cocopeat</strong></div><div className="soil-bar bar-sand"><span>10%</span><strong>Sand / perlite</strong></div></div><p className="mix-note">Recommended mixture: 40% garden soil · 30% compost or vermicompost · 20% cocopeat · 10% sand or perlite.</p></div><div className="where-card"><p className="card-tag">Find your patch</p><h3>Where can a garden live?</h3><div className="where-chips">{gardenLocations.map((item) => <span key={item}>{item.replace(/^A /, "")}</span>)}</div><div className="where-footer"><SunMedium size={18} /><span>Choose a safe place with sunlight and access to water.</span></div></div></div>

            <div className="content-library garden-library"><div className="library-heading"><SectionLabel eyebrow="The complete garden guide" title="From first seed to first harvest." body="Keep this reference close as you choose materials, plant seeds, grow from scraps and care for your containers." /></div><div className="detail-grid"><ContentDisclosure title="Benefits of a Kitchen Garden" open><BulletList items={gardenBenefits} columns /></ContentDisclosure><ContentDisclosure title="Materials Required"><BulletList items={gardenMaterials} columns /><p className="content-note">Every container must have drainage holes so excess water can escape.</p></ContentDisclosure><ContentDisclosure title="How to Plant Seeds"><NumberedList items={plantingSteps} /></ContentDisclosure><ContentDisclosure title="How to Grow Plants from Kitchen Scraps"><div className="scrap-method-grid">{gardenScrapMethods.map((method) => <div className="scrap-method" key={method.title}><h4>{method.title}</h4><NumberedList items={method.steps} /></div>)}</div></ContentDisclosure><ContentDisclosure title="Watering Instructions"><BulletList items={wateringInstructions} /></ContentDisclosure><ContentDisclosure title="Natural Fertilizers"><p className="content-intro">Suitable natural fertilizers include:</p><BulletList items={naturalFertilizers} /><p className="content-note">Do not use fresh animal manure directly on edible plants.</p></ContentDisclosure><ContentDisclosure title="Natural Pest Control"><BulletList items={pestControls} /></ContentDisclosure><ContentDisclosure title="Common Gardening Mistakes"><BulletList items={gardeningMistakes} /></ContentDisclosure></div></div>
          </div>
        </section>

        <section className="plant-guide-section" id="plant-guide"><div className="container"><div className="plant-heading"><SectionLabel eyebrow="Your first harvest" title="Beginner-friendly plants." body="Growing times vary according to climate, seed quality and care. Use this table as a practical starting point." /><span className="plant-count">12<br /><small>plants to try</small></span></div><div className="plant-table-wrap"><table><thead><tr><th>Plant</th><th>Where to grow</th><th>Sunlight</th><th>Watering cue</th><th>Harvest</th></tr></thead><tbody>{plants.map((plant) => <tr key={plant[0]}>{plant.map((value, index) => <td key={`${plant[0]}-${index}`} className={index === 0 ? "plant-name" : ""}>{index === 0 && <Leaf size={14} />}{value}</td>)}</tr>)}</tbody></table></div></div></section>

        <section className="chapter-section cooking-section" id="cooking"><div className="container"><div className="chapter-intro"><div className="chapter-index">02 <span>/ 03</span></div><SectionLabel eyebrow="Cook with care" title="Oil-Smart Cooking" body="Oil-smart cooking means preparing nutritious and tasty food with little or no oil. Food can be cooked using steaming, boiling, baking, roasting, pressure cooking, air frying and water sautéing." /><div className="chapter-action"><span>Health note</span><p>Oil needs vary by person. People with medical conditions should consult a qualified health professional.</p></div></div><div className="cooking-grid"><div className="cooking-copy"><p className="eyebrow"><span />Flavour without the fog</p><h3>More colour.<br /><em>Less compromise.</em></h3><p>Healthy cooking does not have to mean bland cooking. Build flavour through heat, water, spices, texture and time.</p><div className="cook-steps"><div className="cook-step"><span>01</span><div><strong>Steam & sweat</strong><p>Soften onions, garlic and ginger with water or stock.</p></div></div><div className="cook-step"><span>02</span><div><strong>Roast & char</strong><p>High heat brings out sweetness in vegetables.</p></div></div><div className="cook-step"><span>03</span><div><strong>Finish bright</strong><p>Use lemon, herbs, toasted spices or a fresh chutney.</p></div></div></div></div><div className="cooking-visual"><img src={cookingImage} alt="Colourful vegetables prepared in a bowl" /><div className="visual-sticker"><Flame size={17} /><span>Heat is<br /><strong>flavour</strong></span></div></div></div><div className="cook-tips"><div><Coffee size={19} /><span><strong>Try this</strong> Replace one sauté with a splash of stock.</span></div><div><Utensils size={19} /><span><strong>Remember</strong> A non-stick or seasoned pan helps.</span></div><div><SunMedium size={19} /><span><strong>Finish with</strong> Citrus, herbs and a pinch of salt.</span></div></div>

          <div className="content-library cooking-library"><div className="library-heading"><SectionLabel eyebrow="The complete cooking guide" title="Methods, recipes and flavour builders." body="Use safe cookware, follow the manufacturer’s instructions and choose the method that suits your ingredients, equipment and health needs." /></div><div className="detail-grid"><ContentDisclosure title="Where Can Oil-Smart Food Be Prepared?" open><BulletList items={cookingLocations} columns /><p className="content-note">Use safe cookware and follow the manufacturer’s instructions.</p></ContentDisclosure><ContentDisclosure title="Oil-Free Cooking Methods"><div className="method-grid">{cookingMethods.map((method) => <div className="method-card" key={method.title}><h4>{method.title}</h4><p>{method.description}</p>{method.items.length > 0 && <BulletList items={method.items} />}</div>)}</div></ContentDisclosure><ContentDisclosure title="Oil-Smart Recipes"><div className="recipe-grid">{recipes.map((recipe) => <RecipeCard key={recipe.number} recipe={recipe} />)}</div></ContentDisclosure><ContentDisclosure title="Healthy Flavor Options"><p className="content-intro">Use these ingredients to add flavor:</p><div className="flavor-chips">{flavorOptions.map((item) => <span key={item}>{item}</span>)}</div></ContentDisclosure></div></div>
        </div></section>

        <section className="chapter-section waste-section" id="zero-waste"><div className="container"><div className="chapter-intro"><div className="chapter-index">03 <span>/ 03</span></div><SectionLabel eyebrow="Use it all" title="Zero Waste Kitchen" body="A zero-waste kitchen reduces the amount of food, packaging and useful materials sent to the rubbish bin. The aim is not to create zero waste immediately, but to avoid waste wherever possible through better planning, safe storage, creative reuse, recycling and composting." /><div className="chapter-action"><span>One easy shift</span><p>Keep a scrap bowl beside your chopping board.</p></div></div><div className="waste-grid"><div className="waste-visual"><img src={compostImage} alt="A compost bowl filled with kitchen scraps and herbs" /><div className="compost-label"><Recycle size={18} /><span>From scraps<br /><strong>to soil</strong></span></div></div><div className="waste-copy"><p className="eyebrow"><span />The good food loop</p><h3>Nothing is<br /><em>just waste.</em></h3><p>Save stems for stock, freeze ripe fruit for smoothies, and let organic scraps return to the soil through composting.</p><div className="loop-list"><div><span>1</span><div><strong>Reduce</strong><p>Plan, portion and store food where you can see it.</p></div></div><div><span>2</span><div><strong>Reuse</strong><p>Turn leftovers into the next meal, not the bin.</p></div></div><div><span>3</span><div><strong>Return</strong><p>Compost scraps and let nutrients come back around.</p></div></div></div></div></div><div className="compost-note"><div className="note-icon"><Leaf size={20} /></div><p><strong>Start a simple compost mix</strong><span>Fruit and veg scraps · coffee grounds · dry leaves · eggshells · shredded paper</span></p><span className="note-arrow"><ArrowRight size={18} /></span></div>

          <div className="content-library waste-library"><div className="library-heading"><SectionLabel eyebrow="The complete zero-waste guide" title="A practical playbook for using it all." body="The goal is progress, not perfection. Start with one rule, one storage habit, one leftover or one compost layer." /></div><div className="detail-grid"><ContentDisclosure title="The 5R Rule" open><div className="five-r-grid">{wasteRules.map((rule) => <div className="five-r-card" key={rule.number}><div className="five-r-heading"><span>{rule.number}</span><h4>{rule.title}</h4></div><p>{rule.description}</p><BulletList items={rule.items} /><p className="content-example"><strong>Example</strong>{rule.example}</p></div>)}</div></ContentDisclosure><ContentDisclosure title="Food Waste Prevention"><div className="prevention-grid"><div><h4>Plan Meals Before Shopping</h4><p>Before going shopping:</p><NumberedList items={planningSteps} /><p className="content-example"><strong>Example</strong>If you already have rice, lentils and vegetables at home, plan a rice-and-dal meal instead of buying another ready-made meal.</p></div><div><h4>Cook Suitable Portions</h4><p>Cooking too much food often leads to waste.</p><BulletList items={portionTips} /></div><div><h4>Use Older Food First</h4><p>Place older products at the front of the refrigerator or cupboard and newer products behind them. This system is called first in, first out.</p><BulletList items={fifoTips} /></div></div></ContentDisclosure><ContentDisclosure title="Ways to Reuse Food Scraps"><div className="reuse-library"><div className="reuse-block"><h4>1. Vegetable Peels</h4><p>Clean vegetable peels can sometimes be reused in cooking.</p><BulletList items={vegetablePeelUses} /></div><div className="reuse-block"><h4>How to Make Vegetable Stock</h4><NumberedList items={stockSteps} /><p className="content-note">Do not use rotten, mouldy or heavily contaminated scraps.</p></div><div className="reuse-block"><h4>2. Fruit Peels — Citrus Peels</h4><BulletList items={citrusUses} /></div><div className="reuse-block"><h4>Citrus-Infused Vinegar Cleaner</h4><NumberedList items={citrusVinegarSteps} /><p className="content-note warning-note">Safety: Do not use vinegar cleaner on marble, granite, natural stone, electronics or surfaces that vinegar may damage. Never mix vinegar with bleach or other cleaning chemicals.</p></div><div className="reuse-block"><h4>3. Banana Peels</h4><p>Banana peels can be:</p><BulletList items={["Added to compost", "Used in smoothies only when properly washed and suitable for the recipe", "Cooked in certain regional recipes", "Chopped and added to a compost bin"]} /><p className="content-note">For a simple compost use, cut the peel into small pieces and mix it with dry leaves or other compost materials.</p></div><div className="reuse-block"><h4>4. Watermelon Rind</h4><p>The white part of watermelon rind can be:</p><BulletList items={["Pickled", "Cooked as a vegetable", "Added to curry", "Used in chutney"]} /><p className="content-note">Wash the rind thoroughly and remove the hard green outer skin before cooking.</p></div><div className="reuse-block"><h4>5. Stale Bread</h4><p>Stale bread does not always need to be thrown away.</p><p className="mini-heading">Breadcrumbs</p><NumberedList items={staleBreadSteps} /><p className="mini-heading">Use breadcrumbs for:</p><BulletList items={breadcrumbUses} /><p className="mini-heading">Other uses</p><BulletList items={otherBreadUses} /><p className="content-note warning-note">Do not use bread with mould. Throw mouldy bread away.</p></div><div className="reuse-block"><h4>6. Overripe Bananas</h4><p>Soft bananas can be used in:</p><BulletList items={bananaUses} /><p className="mini-heading">Simple Banana Oat Pancakes</p><p className="content-intro">Ingredients: One ripe banana · Half a cup of oats · A small amount of water or milk · Cinnamon, if desired</p><NumberedList items={["Mash the banana.", "Mix in the oats and liquid.", "Leave the batter for five minutes.", "Cook small pancakes on a suitable non-stick pan.", "Serve with fruit."]} /></div><div className="reuse-block"><h4>7. Leftover Rice</h4><p>Leftover rice can be used to make:</p><BulletList items={leftoverRiceUses} /><p className="mini-heading">Leftover Rice Pancakes</p><p className="content-intro">Ingredients: One cup cooked rice · Half a cup rice flour · Chopped onion · Chopped coriander · Grated carrot · Salt · Water</p><NumberedList items={["Mash the rice.", "Add rice flour, vegetables and salt.", "Add water to make a thick batter.", "Cook small pancakes on a non-stick pan.", "Turn them carefully and cook both sides."]} /><p className="content-note warning-note">Food safety: Cool leftover rice quickly, store it covered in the refrigerator and reheat it thoroughly. Do not keep cooked rice at room temperature for a long time.</p></div><div className="reuse-block"><h4>8. Leftover Dal</h4><p>Leftover dal can be used to make:</p><BulletList items={leftoverDalUses} /><p className="mini-heading">Dal Pancakes</p><NumberedList items={["Mix leftover dal with gram flour or rice flour.", "Add chopped onion, coriander and spices.", "Add water if needed.", "Make a thick batter.", "Cook on a suitable pan.", "Serve with chutney or yoghurt."]} /></div><div className="reuse-block"><h4>9. Vegetable Stems and Leaves</h4><p>Many parts of vegetables that are usually discarded can be useful. Wash all parts thoroughly and use only those that are fresh and safe.</p><div className="mini-table"><div><strong>Food part</strong><strong>Example use</strong></div>{vegetableParts.map(([part, use]) => <div key={part}><span>{part}</span><span>{use}</span></div>)}</div></div><div className="reuse-block"><h4>10. Herb Stems</h4><p>Coriander, parsley, mint and basil stems can be used in:</p><BulletList items={herbUses} /><p className="mini-heading">Simple Herb Chutney</p><p className="content-intro">Blend:</p><BulletList items={herbChutneyIngredients} /><p className="content-note">Serve with vegetables, rice, flatbread or snacks.</p></div></div></ContentDisclosure><ContentDisclosure title="Food Storage to Prevent Waste"><div className="storage-grid"><div><h4>Refrigerator Storage</h4><BulletList items={fridgeStorage} /></div><div><h4>Freezing Food</h4><p>Freeze food when it cannot be used soon. Suitable foods may include:</p><BulletList items={freezingFoods} /><p className="content-note">Use freezer-safe containers or bags and label them with the date.</p></div><div><h4>Herb Storage — Method 1: Water Storage</h4><NumberedList items={herbWaterSteps} /></div><div><h4>Herb Storage — Method 2: Freezing</h4><NumberedList items={herbFreezeSteps} /></div><div><h4>Storing Dry Foods</h4><p>Store rice, flour, lentils, oats and spices in:</p><BulletList items={dryFoodStorage} /><p className="content-note">Keep them away from moisture, insects and direct sunlight.</p></div><div><h4>Safe Use of Leftovers</h4><BulletList items={leftoverSafety} /></div></div></ContentDisclosure><ContentDisclosure title="Home Composting"><p>Composting changes suitable organic waste into nutrient-rich material for plants.</p><div className="compost-grid"><div><h4>Green Materials</h4><p>Usually moist and rich in nitrogen:</p><BulletList items={compostGreen} /></div><div><h4>Brown Materials</h4><p>Dry and rich in carbon:</p><BulletList items={compostBrown} /></div></div><p className="content-note">A healthy compost mixture needs both green and brown materials.</p><h4>How to Make Compost</h4><NumberedList items={compostSteps} /><h4>Items to Avoid in a Home Compost Bin</h4><p>Avoid adding:</p><BulletList items={compostAvoid} /><p className="content-note">Composting rules can vary, so follow local waste-management guidance.</p></ContentDisclosure><ContentDisclosure title="Wet and Dry Waste Separation"><div className="separation-grid"><div><h4>Wet Waste</h4><p>Wet waste includes:</p><BulletList items={wetWaste} /><p className="content-note">Suitable wet waste can be composted.</p></div><div><h4>Dry Waste</h4><p>Dry waste includes:</p><BulletList items={dryWaste} /><p className="content-note">Keep dry waste clean and dry before recycling.</p></div></div><div className="three-bin"><p className="mini-heading">Three-Bin System</p><p>Use three labelled containers:</p><div><span>1</span>Compostable Waste</div><div><span>2</span>Recyclable Dry Waste</div><div><span>3</span>Other Waste</div><p className="content-note">This makes waste separation easier for the whole family.</p></div></ContentDisclosure><ContentDisclosure title="Creative Reuse of Kitchen Materials"><div className="reuse-card-grid">{creativeReuse.map((group) => <div className="reuse-card" key={group.title}><h4>{group.title}</h4><BulletList items={group.items} /><p className="content-note">{group.note}</p></div>)}</div><div className="oil-disposal"><h4>Used Cooking Oil</h4><p>Do not pour used oil into the sink because it can block pipes and pollute water.</p><p>Instead:</p><NumberedList items={["Allow the oil to cool.", "Store it in a sealed container.", "Check local collection or recycling services.", "Dispose of it according to local rules."]} /><p className="content-note warning-note">Do not pour large amounts of oil into compost.</p></div></ContentDisclosure><ContentDisclosure title="Seven-Day Zero-Waste Kitchen Challenge"><div className="challenge-grid">{challenge.map(([day, title, text]) => <div className="challenge-card" key={day}><span>{day}</span><h4>{title}</h4><p>{text}</p></div>)}</div></ContentDisclosure></div></div>
        </div></section>

        <section className="quote-section"><div className="quote-pattern" /><div className="container quote-inner"><span className="quote-mark">“</span><blockquote>Healthy kitchens create healthy families<br />and a healthier planet.</blockquote><div className="quote-byline"><span />Dr. Aditi Sharma <small>• The Healthy Kitchen Revolution</small></div></div></section>

        <section className="faq-section" id="faq"><div className="container faq-grid"><div><SectionLabel eyebrow="Need a little clarity?" title="Questions, answered simply." body="Because sustainable habits should feel practical, not perfect." /><div className="faq-side-note"><CircleHelp size={18} /><span>Still curious?<br /><strong>Ask one more question.</strong></span></div></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<ChevronDown size={18} /></summary><p>{faq.answer}</p></details>)}</div></div></section>

        <section className="closing-section"><div className="container closing-inner"><div><p className="eyebrow eyebrow-light"><span />Keep the loop going</p><h2>Good food is a practice.<br /><em>Not a performance.</em></h2></div><div className="closing-actions"><button className="button button-cream" onClick={sharePage}><Share2 size={16} /> Share the guide</button><button className="button button-outline-light" onClick={() => window.print()}><Printer size={16} /> Print it</button></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><a className="brand brand-footer" href="#top"><span className="brand-mark"><Leaf size={19} strokeWidth={2.5} /></span><span><strong>The Healthy Kitchen</strong><em>Revolution</em></span></a><p>Small changes for a kinder, healthier kitchen.</p></div><div className="footer-links"><div><p>Explore</p><a href="#garden">Kitchen Garden</a><a href="#cooking">Oil-Smart Cooking</a><a href="#zero-waste">Zero Waste Kitchen</a></div><div><p>Connect</p><a href="#faq">FAQs</a><button onClick={sharePage}>Share the guide</button><button onClick={() => window.print()}>Printable version</button></div></div><div className="footer-social"><p>Pass it on</p><div><button aria-label="Share on Instagram" onClick={sharePage}><Instagram size={17} /></button><button aria-label="Share on Facebook" onClick={sharePage}><Facebook size={17} /></button><button aria-label="Share on YouTube" onClick={sharePage}><Youtube size={17} /></button><button aria-label="Share with message" onClick={sharePage}><MessageCircle size={17} /></button></div></div></div><div className="container footer-bottom"><span>© 2026 The Healthy Kitchen Revolution</span><span>Made with care for the everyday cook.</span><a href="#top">Back to top ↑</a></div></footer>
      {showTop && <button className="back-top" onClick={() => scrollToId("top")} aria-label="Back to top"><ArrowDownRight size={18} /></button>}
    </div>
  );
}

export default Home;

import { siteConfig } from "@/config/site";
import Image from "next/image";
import {
  FaUtensils,
  FaLeaf,
  FaFish,
  FaPepperHot,
  FaPizzaSlice,
  FaCandyCane,
  FaBowlRice,
  FaIceCream,
  FaCheese,
  FaSnowflake,
  FaCarrot,
  FaWheatAwn,
  FaEgg,
  FaBowlFood,
  FaDrumstickBite,
} from "react-icons/fa6";

const getCategoryIcon = (categoryName: string) => {
  switch (categoryName.toLowerCase()) {
    case "aperitive":
      return <FaUtensils className="text-amber-600" />;
    case "aperitive reci":
      return <FaSnowflake className="text-blue-400" />;
    case "aperitive calde":
      return <FaUtensils className="text-orange-500" />;
    case "paste și risotto":
      return <FaBowlRice className="text-yellow-600" />;
    case "specialități de mare":
      return <FaFish className="text-cyan-500" />;
    case "supe și creme":
      return <FaBowlFood className="text-red-400" />;
    case "feluri principale":
      return <FaPizzaSlice className="text-orange-600" />;
    case "deserturi":
      return <FaIceCream className="text-pink-400" />;
    case "deserturi speciale":
      return <FaCandyCane className="text-amber-500" />;
    case "specialități din carne":
      return <FaDrumstickBite className="text-red-600" />;
    default:
      return <FaLeaf className="text-green-500" />;
  }
};

const DietaryIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "spicy":
      return <FaPepperHot className="text-red-500" />;
    case "vegan":
      return <FaCarrot className="text-green-500" />;
    case "vegetarian":
      return <FaLeaf className="text-green-400" />;
    case "frozen":
      return <FaSnowflake className="text-blue-300" />;
    default:
      return null;
  }
};

const AllergenIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "gluten":
      return <FaWheatAwn className="text-amber-700" />;
    case "lactose":
      return <FaCheese className="text-yellow-400" />;
    case "eggs":
      return <FaEgg className="text-amber-200" />;
    default:
      return null;
  }
};

export default function Menu() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] w-full">
        <Image
          src="/menu-hero.jpg"
          alt="Menu background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4 tracking-tight text-white">
              Meniul Nostru
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white">
              Creații culinare autentice pentru toate gusturile, preparate cu
              pasiune și ingrediente premium
            </p>
          </div>
        </div>
      </div>

      {/* Menu Navigation */}
      <div className="bg-background sticky top-20 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            {siteConfig.menu.categories.map((category, index) => (
              <a
                key={index}
                href={`#${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-textSecondary hover:text-primary transition-colors whitespace-nowrap"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {siteConfig.menu.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              id={category.name.toLowerCase().replace(/\s+/g, "-")}
              className="menu-category scroll-mt-24"
            >
              <div className="relative mb-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-textPrimary pb-3 border-b-2 border-primary">
                    {category.name}
                  </h2>
                  <div className="text-2xl text-primary opacity-70">
                    {getCategoryIcon(category.name)}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group hover:bg-backgroundAlt rounded-lg p-3 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold text-textPrimary group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-1.5 ml-2">
                            {item.dietary?.map((diet, index) => (
                              <DietaryIcon key={index} type={diet} />
                            ))}
                            {item.allergens?.map((allergen, index) => (
                              <AllergenIcon key={index} type={allergen} />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-textSecondary mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-bold text-primary whitespace-nowrap">
                          {item.price} lei
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legendă pentru iconițe */}
        <div className="mt-16 pt-8 border-t border-primary/20">
          <h3 className="text-center text-lg font-semibold mb-4">Legendă</h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaPepperHot className="text-red-500" /> Picant
            </div>
            <div className="flex items-center gap-2">
              <FaCarrot className="text-green-500" /> Vegan
            </div>
            <div className="flex items-center gap-2">
              <FaLeaf className="text-green-400" /> Vegetarian
            </div>
            <div className="flex items-center gap-2">
              <FaSnowflake className="text-blue-300" /> Produs congelat
            </div>
            <div className="flex items-center gap-2">
              <FaWheatAwn className="text-amber-700" /> Conține gluten
            </div>
            <div className="flex items-center gap-2">
              <FaCheese className="text-yellow-400" /> Conține lactate
            </div>
            <div className="flex items-center gap-2">
              <FaEgg className="text-amber-200" /> Conține ouă
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-primary/20">
          <p className="text-sm text-textSecondary italic">
            * Toate prețurile sunt exprimate în LEI și includ TVA
          </p>
          <p className="text-sm text-textSecondary mt-2">
            Pentru alergeni și informații nutriționale, vă rugăm să consultați
            personalul nostru
          </p>
        </div>
      </div>
    </main>
  );
}

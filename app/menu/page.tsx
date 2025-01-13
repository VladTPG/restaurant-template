import { siteConfig } from "@/config/site";

export default function Menu() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">Meniul Nostru</h1>

        <div className="space-y-20">
          {siteConfig.menu.categories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-2xl font-semibold mb-8 text-center pb-2 border-b border-primary/20">
                {category.name}
              </h2>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-baseline group"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="ml-4 text-lg font-semibold whitespace-nowrap text-primary">
                      {item.price} lei
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

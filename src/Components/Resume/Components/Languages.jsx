import { LanguagesIcon } from "lucide-react"

const Languages = () => {
  const languages = [
    {
      name: "English",
      proficiency: "Professional",
    },
    {
      name: "Urdu",
      proficiency: "Native",
    },
    {
      name: "Sindhi",
      proficiency: "Native",
    },
  ]

  return (
    <section className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-full">
          <LanguagesIcon size={16} className="text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="font-medium">Languages</h2>
      </div>
      <hr className="border-gray-200 dark:border-gray-700 mb-3" />

      <div className="space-y-2">
        {languages.map((language, index) => (
          <div key={index}>
            <div className="text-sm">{language.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{language.proficiency}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages


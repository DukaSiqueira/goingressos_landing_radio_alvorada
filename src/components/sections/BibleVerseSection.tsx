export function BibleVerseSection() {
  return (
    <section className="w-full py-2 bg-white">
      <div className="container mx-auto px-2">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="p-8 border-2 border-[#1f3c6c]/20 rounded-lg shadow-sm bg-gray-50/50">
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-serif italic text-[#1f3c6c] relative">
                <span className="text-4xl text-[#1f3c6c]/20 absolute -left-4 -top-4">
                  &quot;
                </span>
                E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda
                criatura.
                <span className="text-4xl text-[#1f3c6c]/20 absolute -right-4 -bottom-4">
                  &quot;
                </span>
              </p>
              <footer className="text-base text-gray-600 font-medium pt-2">
                — Marcos 16:15
              </footer>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
} 
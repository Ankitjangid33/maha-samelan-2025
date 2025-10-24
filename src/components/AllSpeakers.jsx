import { useState, useMemo, useEffect } from "react";
import {
  FaUsers,
  FaSearch,
  FaFilter,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaList,
  FaTh,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const AllSpeakers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [expandedCategories, setExpandedCategories] = useState({
    acharya: true, // Auto-expand important categories
    doctor: true,
  });
  const [speakersPerPage] = useState(20);

  const allSpeakers = useMemo(
    () => [
      // Speaker data will be added here
    ],
    []
  );

  const categories = useMemo(
    () => [
      { key: "all", label: "सभी", count: allSpeakers.length },
      {
        key: "acharya",
        label: "आचार्यगण",
        count: allSpeakers.filter((s) => s.category === "acharya").length,
      },
      {
        key: "swami",
        label: "संन्यासी गण",
        count: allSpeakers.filter((s) => s.category === "swami").length,
      },
      {
        key: "doctor",
        label: "विद्वद्गण",
        count: allSpeakers.filter((s) => s.category === "doctor").length,
      },
      {
        key: "influencer",
        label: "सोशल मीडिया",
        count: allSpeakers.filter((s) => s.category === "influencer").length,
      },
      {
        key: "speaker",
        label: "अन्य वक्ता",
        count: allSpeakers.filter((s) => s.category === "speaker").length,
      },
    ],
    [allSpeakers]
  );

  const filteredAndSortedSpeakers = useMemo(() => {
    let filtered = allSpeakers.filter((speaker) => {
      const matchesSearch =
        speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || speaker.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort speakers
    filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return filtered;
  }, [allSpeakers, searchTerm, selectedCategory, sortOrder]);

  // Pagination logic
  const totalPages = Math.ceil(
    filteredAndSortedSpeakers.length / speakersPerPage
  );
  const startIndex = (currentPage - 1) * speakersPerPage;
  const endIndex = startIndex + speakersPerPage;
  const currentSpeakers = filteredAndSortedSpeakers.slice(startIndex, endIndex);

  // Group speakers by category for organized view
  const speakersByCategory = useMemo(() => {
    const grouped = {};
    categories.slice(1).forEach((category) => {
      grouped[category.key] = allSpeakers.filter(
        (speaker) => speaker.category === category.key
      );
    });
    return grouped;
  }, [allSpeakers, categories]);

  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <section
      className="py-12 sm:py-16 bg-gray-50"
      aria-labelledby="all-speakers-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            id="all-speakers-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4 flex items-center justify-center gap-3"
          >
            <FaUsers className="text-orange-600" />
            सम्पूर्ण वक्ता सूची
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-8">
            महासम्मेलन के सभी प्रतिष्ठित वक्ता और संचालक
          </p>

          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-auto">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="वक्ता खोजें..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full lg:w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  aria-label="वक्ता खोजें"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="खोज साफ़ करें"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* Filter and Sort Controls */}
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-expanded={showFilters}
                >
                  <FaFilter className="text-sm" />
                  फ़िल्टर
                </button>

                <button
                  onClick={() =>
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-label={`नाम के अनुसार ${
                    sortOrder === "asc" ? "अवरोही" : "आरोही"
                  } क्रम में सॉर्ट करें`}
                >
                  {sortOrder === "asc" ? (
                    <FaSortAlphaDown />
                  ) : (
                    <FaSortAlphaUp />
                  )}
                  सॉर्ट
                </button>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-3 py-2 transition-colors ${
                      viewMode === "grid"
                        ? "bg-orange-600 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    aria-label="ग्रिड व्यू"
                  >
                    <FaTh />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-3 py-2 transition-colors ${
                      viewMode === "list"
                        ? "bg-orange-600 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    aria-label="लिस्ट व्यू"
                  >
                    <FaList />
                  </button>
                </div>

                {(searchTerm || selectedCategory !== "all") && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    साफ़ करें
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            {showFilters && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  श्रेणी के अनुसार फ़िल्टर करें:
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.key}
                      onClick={() => setSelectedCategory(category.key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category.key
                          ? "bg-orange-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                      }`}
                      aria-pressed={selectedCategory === category.key}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              कुल {filteredAndSortedSpeakers.length} वक्ता मिले
              {filteredAndSortedSpeakers.length > speakersPerPage &&
                ` (पृष्ठ ${currentPage} of ${totalPages})`}
            </p>

            {/* Quick Category Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === category.key
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Speakers Display */}
          {selectedCategory === "all" && !searchTerm ? (
            /* Category-wise organized view */
            <div className="space-y-6 mb-8">
              {categories.slice(1).map((category) => (
                <div
                  key={category.key}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100 flex items-center justify-between">
                    <button
                      onClick={() => toggleCategory(category.key)}
                      className="flex items-center gap-3 hover:text-orange-600 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-800">
                        {category.label}
                      </h3>
                      <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                      {expandedCategories[category.key] ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedCategory(category.key)}
                      className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
                    >
                      सभी देखें →
                    </button>
                  </div>

                  {expandedCategories[category.key] && (
                    <div className="p-4">
                      <div
                        className={
                          viewMode === "grid"
                            ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                            : "space-y-3"
                        }
                      >
                        {speakersByCategory[category.key]?.map(
                          (speaker, index) =>
                            viewMode === "grid" ? (
                              <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-3 hover:bg-orange-50 transition-all duration-300 border-l-4 border-orange-500 group"
                              >
                                <h4 className="font-semibold text-gray-800 mb-1 text-sm group-hover:text-orange-600 transition-colors">
                                  {speaker.name}
                                </h4>
                                <p className="text-orange-600 text-xs font-medium">
                                  {speaker.specialty}
                                </p>
                              </div>
                            ) : (
                              <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group"
                              >
                                <div>
                                  <h4 className="font-semibold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">
                                    {speaker.name}
                                  </h4>
                                  <p className="text-orange-600 text-xs">
                                    {speaker.specialty}
                                  </p>
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Filtered/Search results with pagination */
            <>
              <div
                className={
                  viewMode === "grid"
                    ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8"
                    : "space-y-3 mb-8"
                }
              >
                {currentSpeakers.map((speaker, index) =>
                  viewMode === "grid" ? (
                    <div
                      key={startIndex + index}
                      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500 group"
                    >
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-orange-600 transition-colors">
                        {speaker.name}
                      </h4>
                      <p className="text-orange-600 text-xs font-medium mb-3">
                        {speaker.specialty}
                      </p>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          speaker.category === "acharya"
                            ? "bg-yellow-100 text-yellow-800"
                            : speaker.category === "swami"
                            ? "bg-orange-100 text-orange-800"
                            : speaker.category === "doctor"
                            ? "bg-blue-100 text-blue-800"
                            : speaker.category === "influencer"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {
                          categories.find((c) => c.key === speaker.category)
                            ?.label
                        }
                      </span>
                    </div>
                  ) : (
                    <div
                      key={startIndex + index}
                      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500 group flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                          {speaker.name}
                        </h4>
                        <p className="text-orange-600 text-sm font-medium">
                          {speaker.specialty}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          speaker.category === "acharya"
                            ? "bg-yellow-100 text-yellow-800"
                            : speaker.category === "swami"
                            ? "bg-orange-100 text-orange-800"
                            : speaker.category === "doctor"
                            ? "bg-blue-100 text-blue-800"
                            : speaker.category === "influencer"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {
                          categories.find((c) => c.key === speaker.category)
                            ?.label
                        }
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mb-8">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <FaChevronLeft className="text-sm" />
                    पिछला
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = Math.max(
                        1,
                        Math.min(currentPage - 2 + i, totalPages - 4 + i)
                      );
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-2 rounded-lg transition-colors ${
                            currentPage === pageNum
                              ? "bg-orange-600 text-white"
                              : "bg-white border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    अगला
                    <FaChevronRight className="text-sm" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* No Results */}
          {filteredAndSortedSpeakers.length === 0 && (
            <div className="text-center py-12">
              <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-4">कोई वक्ता नहीं मिला</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                सभी वक्ता दिखाएं
              </button>
            </div>
          )}

          {/* Summary Card */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              कुल {allSpeakers.length}+ विशेषज्ञ वक्ता
            </h3>
            <p className="text-lg sm:text-xl text-orange-100 mb-6">
              विविध क्षेत्रों के प्रतिष्ठित विद्वान और विचारक एक मंच पर
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.slice(1).map((category) => (
                <div key={category.key} className="bg-white/20 rounded-lg p-3">
                  <div className="text-2xl font-bold">{category.count}</div>
                  <div className="text-sm text-orange-200">
                    {category.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSpeakers;

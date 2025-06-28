import { Save, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import {
  MAX_ATTACK,
  MAX_DEFENSE,
  MAX_HP,
  MAX_SPEED,
  MIN_ATTACK,
  MIN_DEFENSE,
  MIN_HP,
  MIN_SPEED,
} from "@/common/stats";
import useMonsterForm from "./hooks/useMonsterForm";

function MonsterForm() {
  const { errors, formData, handleSubmit, handleInputChange, isSubmitting } =
    useMonsterForm();

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto max-w-2xl px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Monsters</span>
          </Link>

          <h1 className="hero-title text-3xl text-white mb-2">
            Create a new monster
          </h1>
          <p className="text-gray-400">
            Design your ultimate fighter for the arena
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg border border-gray-700">
            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Monster name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none"
                placeholder="Enter monster name..."
                maxLength={50}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Image URL */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => handleInputChange("imageUrl", e.target.value)}
                className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none"
                placeholder="https://static.wikia.nocookie.net/another-battles/images/c/c8/BaseZodd.webp/revision/latest?cb=20240623164101"
              />
              {errors.imageUrl && (
                <p className="mt-1 text-sm text-red-400">{errors.imageUrl}</p>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Attack */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Attack ({MIN_ATTACK}-{MAX_ATTACK})
                </label>
                <input
                  type="number"
                  value={formData.attack}
                  onChange={(e) => handleInputChange("attack", e.target.value)}
                  className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none"
                />
                {errors.attack && (
                  <p className="mt-1 text-sm text-red-400">{errors.attack}</p>
                )}
              </div>

              {/* Defense */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Defense ({MIN_DEFENSE}-{MAX_DEFENSE})
                </label>
                <input
                  type="number"
                  value={formData.defense}
                  onChange={(e) => handleInputChange("defense", e.target.value)}
                  className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none"
                />
                {errors.defense && (
                  <p className="mt-1 text-sm text-red-400">{errors.defense}</p>
                )}
              </div>

              {/* Speed */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Speed ({MIN_SPEED}-{MAX_SPEED})
                </label>
                <input
                  type="number"
                  value={formData.speed}
                  onChange={(e) => handleInputChange("speed", e.target.value)}
                  className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none"
                />
                {errors.speed && (
                  <p className="mt-1 text-sm text-red-400">{errors.speed}</p>
                )}
              </div>

              {/* HP */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  HP ({MIN_HP}-{MAX_HP})
                </label>
                <input
                  type="number"
                  value={formData.hp}
                  onChange={(e) => handleInputChange("hp", e.target.value)}
                  className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-2 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none"
                />
                {errors.hp && (
                  <p className="mt-1 text-sm text-red-400">{errors.hp}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2 rounded-lg bg-amber-400 px-6 py-3 text-gray-900 font-medium hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Save className="h-5 w-5" />
            <span>
              {isSubmitting ? "Creating Monster..." : "Create Monster"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default MonsterForm;

import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

import type { MonsterFormData } from "@/components/MonsterForm/types";
import { generateId } from "@/lib/utils";
import { addMonster } from "@/lib/storage";
import type { Monster } from "@/common/types";
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

function useMonsterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<MonsterFormData>({
    name: "",
    attack: "100",
    defense: "100",
    speed: "100",
    hp: "100",
    imageUrl: "",
  });

  const [errors, setErrors] = useState<Partial<MonsterFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<MonsterFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = "Image URL is required";
    }

    const attack = parseInt(formData.attack);
    if (isNaN(attack) || attack < MIN_ATTACK || attack > MAX_ATTACK) {
      newErrors.attack = `Attack must be between ${MIN_ATTACK} and ${MAX_ATTACK}`;
    }

    const defense = parseInt(formData.defense);
    if (isNaN(defense) || defense < MIN_DEFENSE || defense > MAX_DEFENSE) {
      newErrors.defense = `Defense must be between ${MIN_DEFENSE} and ${MAX_DEFENSE}`;
    }

    const speed = parseInt(formData.speed);
    if (isNaN(speed) || speed < MIN_SPEED || speed > MAX_SPEED) {
      newErrors.speed = `Speed must be between ${MIN_SPEED} and ${MAX_SPEED}`;
    }

    const hp = parseInt(formData.hp);
    if (isNaN(hp) || hp < MIN_HP || hp > MAX_HP) {
      newErrors.hp = `HP must be between ${MIN_HP} and ${MAX_HP}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const newMonster: Monster = {
        id: generateId(),
        name: formData.name.trim(),
        attack: parseInt(formData.attack),
        defense: parseInt(formData.defense),
        speed: parseInt(formData.speed),
        hp: parseInt(formData.hp),
        maxHp: parseInt(formData.hp),
        imageUrl: formData.imageUrl.trim(),
      };

      addMonster(newMonster);
      navigate("/");
    } catch (error) {
      console.error("Failed to create monster:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof MonsterFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  return {
    errors,
    formData,
    isSubmitting,
    handleSubmit,
    handleInputChange,
  };
}

export default useMonsterForm;

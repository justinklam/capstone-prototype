import React, { useState } from "react";

function AvatarPlayground() {
  const [customizationParams, setCustomizationParams] = useState({});

  const randomChar = Array.from(
    { length: Math.floor(Math.random() * 5) + 1 },
    () => Math.random().toString(36)
  ).join("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value === "random") {
      const randomValue = randomChar;

      setCustomizationParams((prevParams) => ({
        ...prevParams,
        [name]: randomValue,
      }));
    } else {
      setCustomizationParams((prevParams) => ({
        ...prevParams,
        [name]: value,
      }));
    }
  };

  const generateAvatarUrl = () => {
    const queryParams = Object.entries(customizationParams)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    console.log(`queryParams:`, queryParams);
    return `https://api.dicebear.com/6.x/adventurer/svg?seed=${queryParams}`;
  };

  const avatarUrl = generateAvatarUrl();
  const isSeedSelected = customizationParams.seed !== undefined;

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">DiceBear Avatar</h2>

      {/* Customization Options */}
      <div className="flex flex-col items-start">
        {/* Character */}
        <label htmlFor="seed" className="mb-2">
          Character
        </label>
        <select
          id="seed"
          name="seed"
          onChange={handleChange}
          className="border rounded-md py-2 px-4 mb-4"
        >
          <option value="">Default</option>
          <option value="random">Random</option>
          <option value="Felix">Felix</option>
          <option value="Aneka">Aneka</option>
        </select>

        {/* Render other select elements only when seed is selected */}

        {isSeedSelected && (
          <>
            {/* Skin Color */}
            <label htmlFor="skinColor" className="mb-2">
              Skin Color
            </label>
            <select
              id="skinColor"
              name="skinColor"
              onChange={handleChange}
              className="border rounded-md py-2 px-4 mb-4"
            >
              <option value="">Default</option>
              <option value="ecad80">Variant 1</option>
              <option value="9e5622">Variant 2</option>
              <option value="763900">Variant 3</option>
              <option value="f2d3b1">Variant 4</option>
            </select>

            {/* Hair Style */}
            <label htmlFor="hair" className="mb-2">
              Hair Style
            </label>
            <select
              id="hair"
              name="hair"
              onChange={handleChange}
              className="border rounded-md py-2 px-4 mb-4"
            >
              <option value="">Default</option>
              <option value="short05">Short 1</option>
              <option value="short09">Short 2</option>
              <option value="short05">Short 3</option>
              <option value="long1">Long 1</option>
              <option value="long3">Long 2</option>
              <option value="long6">Long 3</option>
            </select>

            {/* Hair Color */}
            <label htmlFor="hairColor" className="mb-2">
              Hair Color
            </label>
            <select
              id="hairColor"
              name="hairColor"
              onChange={handleChange}
              className="border rounded-md py-2 px-4 mb-4"
            >
              <option value="">Default</option>
              <option value="0e0e0e">Black</option>
              <option value="6a4e35">Brown</option>
              <option value="cb6820">Orange</option>
              <option value="e5d7a3">Blonde</option>
              <option value="85c2c6">Blue</option>
              <option value="592454">Purple</option>
              <option value="afafaf">Grey</option>
            </select>

            {/* Mouth Type */}
            <label htmlFor="mouth" className="mb-2">
              Mouth Type{" "}
            </label>
            <select
              id="mouth"
              name="mouth"
              onChange={handleChange}
              className="border rounded-md py-2 px-4 mb-4"
            >
              <option value="">Default</option>
              <option value="variant01">Mouth 1</option>
              <option value="variant02">Mouth 2</option>
              <option value="variant12">Mouth 3</option>
              <option value="variant17">Mouth 4</option>
              <option value="variant23">Mouth 5</option>
            </select>

            {/* Background Color */}
            <label htmlFor="backgroundColor" className="mb-2">
              Background Color
            </label>
            <select
              id="backgroundColor"
              name="backgroundColor"
              onChange={handleChange}
              className="border rounded-md py-2 px-4 mb-4"
            >
              <option value="#fffff">Default</option>
              <option value="b6e3f4">Blue</option>
              <option value="c0aede">Purple</option>
              <option value="ffd5dc">Pink</option>
              <option value="ffdfbf">Peach</option>
            </select>
          </>
        )}
      </div>

      {/* Selected Options */}
      <div className="flex items-center mb-4">
        <img
          src={avatarUrl}
          alt="Selected Avatar"
          className="w-24 h-24 rounded-full"
        />
      </div>
    </div>
  );
}

export default AvatarPlayground;

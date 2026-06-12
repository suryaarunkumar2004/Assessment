import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import {
  HomeWrapper,
  HeroSection,
  HeroTitle,
  HeroSub,
  InputRow,
  NameInput,
  NextButton,
  Decoration,
  GlowOrb,
} from "./Home.styles";

function Home() {
  const { setUserName } = useAppContext();
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleNext = (): void => {
    if (!inputValue.trim()) {
      setError("Please enter your name to continue.");
      return;
    }
    setUserName(inputValue.trim());
    navigate("/details");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") handleNext();
  };

  return (
    <HomeWrapper>
      <GlowOrb $pos="top-left" />
      <GlowOrb $pos="bottom-right" />
      <HeroSection>
        <Decoration>✦ Welcome to Pictura ✦</Decoration>
        <HeroTitle>Explore the World<br />Through Lenses</HeroTitle>
        <HeroSub>
          Discover stunning photography from around the globe. Save your favourites and build your personal collection.
        </HeroSub>
        <InputRow>
          <NameInput
            type="text"
            placeholder="Enter your name..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setError("");
            }}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <NextButton onClick={handleNext}>Next →</NextButton>
        </InputRow>
        {error && <p style={{ color: "var(--color-accent-2)", marginTop: "0.75rem", fontSize: "0.88rem" }}>{error}</p>}
      </HeroSection>
    </HomeWrapper>
  );
}

export default Home;

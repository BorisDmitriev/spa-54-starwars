import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import StarWarsCharacter from "../components/StarWarsCharacter";

test("renders StarWarsCharacter component with character data", async () => {
    render(<StarWarsCharacter />);
    const name = await screen.findByText(/Name:/);
    const height = screen.getByText(/Height:/);
    const mass = screen.getByText(/Mass:/);
    const hairColor = screen.getByText(/Hair Color:/);
    expect(name).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(mass).toBeInTheDocument();
    expect(hairColor).toBeInTheDocument();
});

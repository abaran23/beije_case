import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Medium from "./Medium";
import store from "../store";

const comp = (
  <Provider store={store}>
    <Medium />
  </Provider>
);

describe("Medium component", () => {
  test("when app initialized no remove package found", () => {
    //Arrange
    render(comp);

    //Assert
    const changedElement = screen.queryByText("Paketten Çıkar");
    expect(changedElement).not.toBeInTheDocument();
  });

  test("user adds 20 standard pads", () => {
    //Arrange
    render(comp);

    //Act
    const slider = screen.getAllByLabelText("slider")[0];
    fireEvent.change(slider, { target: { value: 20 } });

    //Assert
    const changedElement = screen.queryByText("20 Standart Ped");
    expect(changedElement).toBeInTheDocument();
  });

  test("user checks the price of the add to cart button", () => {
    //Arrange
    render(comp);

    //Assert
    const changedElement = screen.getByText("Sepete Ekle (₺59.46)");
    expect(changedElement).toBeInTheDocument();
  });

  test("user adds 30 super+ pads", () => {
    //Arrange
    render(comp);

    //Act
    const slider = screen.getAllByLabelText("slider")[2];
    fireEvent.change(slider, { target: { value: 30 } });

    //Assert
    const changedElement = screen.queryByText("30 Süper+ Ped", {
      exact: false,
    });
    expect(changedElement).toBeInTheDocument();
  });

  test("user checks the price of the add to cart button", () => {
    //Arrange
    render(comp);

    //Assert
    const changedElement = screen.getByText("Sepete Ekle (₺171.90)");
    expect(changedElement).toBeInTheDocument();
  });

  test("user adds 50 super daily pad", async () => {
    //Arrange
    render(comp);

    //Act
    const button = screen.getByText("beije Günlük Ped");
    fireEvent.click(button);
    const slider = screen.getAllByLabelText("slider")[1];
    fireEvent.change(slider, { target: { value: 50 } });

    //Assert
    const changedElement = screen.queryByText("50 Süper Günlük Ped");
    expect(changedElement).toBeInTheDocument();
  });

  test("user checks the price of the add to cart button", () => {
    //Arrange
    render(comp);

    //Assert
    const changedElement = screen.getByText("Sepete Ekle (₺276.50)");
    expect(changedElement).toBeInTheDocument();
  });

  test("user removes 30 super daily pad by slider", async () => {
    //Arrange
    render(comp);

    //Act
    const button = screen.getByText("beije Günlük Ped");
    fireEvent.click(button);
    const slider = screen.getAllByLabelText("slider")[1];
    fireEvent.change(slider, { target: { value: 20 } });

    //Assert
    const changedElement = screen.queryByText("20 Süper Günlük Ped");
    expect(changedElement).toBeInTheDocument();
  });

  test("user checks the price of the add to cart button", () => {
    //Arrange
    render(comp);

    //Assert
    const changedElement = screen.getByText("Sepete Ekle (₺213.74)");
    expect(changedElement).toBeInTheDocument();
  });

  test("user adds 10 standard tampon", () => {
    //Arrange
    render(comp);
    const button = screen.getByText("beije Tampon");
    fireEvent.click(button);

    //Act
    const slider = screen.getAllByLabelText("slider")[0];
    fireEvent.change(slider, { target: { value: 10 } });

    //Assert
    const changedElement = screen.queryByText("10 Mini Tampon");
    expect(changedElement).toBeInTheDocument();
  });

  test("user checks the price of the add to cart button", () => {
    //Arrange
    render(comp);

    //Assert
    const changedElement = screen.getByText("Sepete Ekle (₺247.51)");
    expect(changedElement).toBeInTheDocument();
  });
});

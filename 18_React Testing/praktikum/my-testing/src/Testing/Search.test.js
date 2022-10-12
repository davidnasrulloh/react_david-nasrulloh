import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../Component/Search";

describe("Search", () => {
    it('passing test', () => {
        expect(true).toBeTruthy();
    })

    it('failing test', () => {
    expect(false).toBeFalsy();
    })

    test("Render Search Component", () => {
        const tree = renderer
            .create(<Search/>)
            .toJSON()

        expect(tree).toMatchSnapshot();
    });

    test("Header Content", () => {
        render(<Search/>);
        expect(screen.getByText("Cari Cerita")).toBeInTheDocument();
        screen.debug();
    });

    test("Call the onChange callback handler", () => {
        const onChange = jest.fn();
        render(
            <Search value="" onChange={onChange}>
                Ini isi Search
            </Search>
        )
        fireEvent.change(screen.getByRole("textbox"),{
            target: {value: 'Java Script'}
        })
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});

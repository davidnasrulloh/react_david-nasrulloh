import React from "react";
import FormCoding from "../Component/FormCoding";
import renderer from "react-test-renderer";

describe("Form Coding", () => {
    it('passing test', () => {
        expect(true).toBeTruthy();
    })

    it('failing test', () => {
        expect(false).toBeFalsy();
    })

    test("Render FromCoding Component", () => {
        const tree = renderer
            .create(<FormCoding/>)
            .toJSON()

        expect(tree).toMatchSnapshot();
    });
});
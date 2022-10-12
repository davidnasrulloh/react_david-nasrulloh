import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";
import renderer from "react-test-renderer";
import { useHref, useParams } from "react-router-dom";

describe("Home", () => {
    it("passing test", () => {
        expect(true).toBeTruthy();
    });

    it("failing test", () => {
        expect(false).toBeFalsy();
    });
});
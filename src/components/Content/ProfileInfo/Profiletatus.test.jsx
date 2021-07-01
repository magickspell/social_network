import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="it samurai" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it samurai");
    });

    test("span should be in component", () => {
        const component = create(<ProfileStatus status="it samurai" />);
        const instance = component.getInstance();
        const root = component.root;
        let span = root.findByType("span");

        expect( () => {
            let input = root.findByType("input");
        }).toThrow();
        expect(span.length).not.toBeNull();
        expect(span.children[0]).toBe("it samurai");
    });

    test("input should be displayed in edit mode", () => {
        const component = create(<ProfileStatus status="it samurai"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it samurai")
    })

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="it samurai" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    })
});
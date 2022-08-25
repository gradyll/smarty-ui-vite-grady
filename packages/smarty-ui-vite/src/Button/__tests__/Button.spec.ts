import SButton from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe('SButton', () => {
  // mount
  test("mount  @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'SButton'
      }
    });

    // 断言
    expect(wrapper.text()).toBe("SButton");

  });
})

describe('color', () => {
  test("default", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'SButton'
      }
    });

    expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-blue-500')).toBe(true)
  });

  test("red", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'SButton'
      },
      props: {
        color: 'red'
      }
    });

    expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-red-500')).toBe(true)
  });
})

describe("round", () => {
  test("default", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "SButton",
      },
    });

    expect(wrapper.classes().map(v => v.replace('\n', '')).includes("rounded-lg")).toBe(true);
  });

  test("round:true", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "SButton",
      },
      props: {
        round: true,
      },
    });

    expect(wrapper.classes().map(v => v.replace('\n', '')).includes("rounded-full")).toBe(true);
  });
});



describe('plain', () => {
  test('default', () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: 'SButton'
      }
    })
    expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-blue-500')).toBe(true)
  })

  test("plain:true", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "SButton",
      },
      props: {
        plain: true,
      },
    });

    expect(wrapper.classes().map(v => v.replace('\n', '')).includes("bg-blue-100")).toBe(true);
  });
  test("icon", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "SButton",
      },
      props: {
        icon: "edit",
      },
    });

    expect(wrapper.find("i").classes().map(v => v.replace('\n', '')).includes("i-ic-baseline-edit")).toBe(
      true
    );
  });
})
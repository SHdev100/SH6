/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kAhnrc4yp7SieEoMyjLDJq
// Component: 52z7hHdt6_

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import Tilt from "@plasmicpkgs/react-parallax-tilt";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: kAhnrc4yp7SieEoMyjLDJq/projectcss
import sty from "./PlasmicSophiaHome5Animation.module.css"; // plasmic-import: 52z7hHdt6_/css

createPlasmicElementProxy;

export type PlasmicSophiaHome5Animation__VariantMembers = {};
export type PlasmicSophiaHome5Animation__VariantsArgs = {};
type VariantPropType = keyof PlasmicSophiaHome5Animation__VariantsArgs;
export const PlasmicSophiaHome5Animation__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSophiaHome5Animation__ArgsType = {};
type ArgPropType = keyof PlasmicSophiaHome5Animation__ArgsType;
export const PlasmicSophiaHome5Animation__ArgProps = new Array<ArgPropType>();

export type PlasmicSophiaHome5Animation__OverridesType = {
  root?: Flex__<"div">;
  tilt?: Flex__<typeof Tilt>;
};

export interface DefaultSophiaHome5AnimationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSophiaHome5Animation__RenderFunc(props: {
  variants: PlasmicSophiaHome5Animation__VariantsArgs;
  args: PlasmicSophiaHome5Animation__ArgsType;
  overrides: PlasmicSophiaHome5Animation__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Reveal
            className={classNames("__wab_instance", sty.reveal___6JeJw)}
            triggerOnce={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uhByJ
              )}
            >
              {"SOPHIA'S HOME"}
            </div>
          </Reveal>
          <Reveal
            cascade={true}
            className={classNames("__wab_instance", sty.reveal___4CrfW)}
            damping={0.5}
            delay={500}
            effect={"bounce"}
            triggerOnce={true}
          >
            <Tilt
              data-plasmic-name={"tilt"}
              data-plasmic-override={overrides.tilt}
              className={classNames("__wab_instance", sty.tilt)}
              gyroscope={false}
              scale={1.05}
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              trackOnWindow={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vJbU4
                )}
              >
                {"5"}
              </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "tilt"],
  tilt: ["tilt"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  tilt: typeof Tilt;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSophiaHome5Animation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSophiaHome5Animation__VariantsArgs;
    args?: PlasmicSophiaHome5Animation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSophiaHome5Animation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSophiaHome5Animation__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSophiaHome5Animation__ArgProps,
          internalVariantPropNames: PlasmicSophiaHome5Animation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSophiaHome5Animation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSophiaHome5Animation";
  } else {
    func.displayName = `PlasmicSophiaHome5Animation.${nodeName}`;
  }
  return func;
}

export const PlasmicSophiaHome5Animation = Object.assign(
  // Top-level PlasmicSophiaHome5Animation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tilt: makeNodeComponent("tilt"),

    // Metadata about props expected for PlasmicSophiaHome5Animation
    internalVariantProps: PlasmicSophiaHome5Animation__VariantProps,
    internalArgProps: PlasmicSophiaHome5Animation__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSophiaHome5Animation;
/* prettier-ignore-end */

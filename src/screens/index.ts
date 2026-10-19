import type { ComponentType } from "react";
import Main from "./Main";
import Categories from "./Categories";
import ShapeColor from "./ShapeColor";
import Search from "./Search";
import Listing from "./Listing";
import Product from "./Product";
import Lenses from "./Lenses";
import TryOn from "./TryOn";
import Quiz from "./Quiz";
import Favorites from "./Favorites";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Confirmed from "./Confirmed";
import Profile from "./Profile";
import FavEmpty from "./FavEmpty";
import Recommended from "./Recommended";
import CartEmpty from "./CartEmpty";
import WildGrace from "./WildGrace";
import Reviews from "./Reviews";
import FitSize from "./FitSize";
import Details from "./Details";
import Features from "./Features";
import Description from "./Description";
import ForYou from "./ForYou";
import Usage from "./Usage";
import UsageReaders from "./UsageReaders";
import Progressives from "./Progressives";
import BifocalSheet from "./BifocalSheet";
import LensType from "./LensType";
import IDGuard from "./IDGuard";
import Specialty from "./Specialty";
import LensIndex from "./LensIndex";
import Coating from "./Coating";
import AddOns from "./AddOns";
import ReviewOrder from "./ReviewOrder";
import CartFull from "./CartFull";
import ProfileGuest from "./ProfileGuest";
import SignIn from "./SignIn";
import ProfileMenu from "./ProfileMenu";
import Accessories from "./Accessories";
import MyLook from "./MyLook";
import TryOnFit from "./TryOnFit";

export type Screen = { path: string; title: string; height: number; Component: ComponentType };

export const screens: Screen[] = [
  { path: "Main", title: "01 Home \u00b7 full scroll", height: 3260, Component: Main },
  { path: "Categories", title: "02 Categories", height: 844, Component: Categories },
  { path: "ShapeColor", title: "03 Categories \u00b7 shape & colour", height: 844, Component: ShapeColor },
  { path: "Search", title: "04 Search", height: 844, Component: Search },
  { path: "Listing", title: "05 Product listing", height: 844, Component: Listing },
  { path: "Product", title: "06 Product detail", height: 844, Component: Product },
  { path: "Lenses", title: "07 Choose lenses", height: 844, Component: Lenses },
  { path: "TryOn", title: "08 Virtual try-on", height: 844, Component: TryOn },
  { path: "Quiz", title: "09 Style quiz", height: 844, Component: Quiz },
  { path: "Favorites", title: "10 Favorites", height: 844, Component: Favorites },
  { path: "Cart", title: "11 Cart", height: 844, Component: Cart },
  { path: "Checkout", title: "12 Checkout", height: 844, Component: Checkout },
  { path: "Confirmed", title: "13 Order confirmed", height: 844, Component: Confirmed },
  { path: "Profile", title: "14 Profile", height: 844, Component: Profile },
  { path: "FavEmpty", title: "15 Favorites \u00b7 signed out", height: 844, Component: FavEmpty },
  { path: "Recommended", title: "16 You might also like", height: 844, Component: Recommended },
  { path: "CartEmpty", title: "17 Cart \u00b7 empty", height: 844, Component: CartEmpty },
  { path: "WildGrace", title: "18 Wild Grace \u00b7 product", height: 844, Component: WildGrace },
  { path: "Reviews", title: "19 Wild Grace \u00b7 reviews", height: 844, Component: Reviews },
  { path: "FitSize", title: "20 Fit & size", height: 844, Component: FitSize },
  { path: "Details", title: "21 Details \u00b7 measurements", height: 844, Component: Details },
  { path: "Features", title: "22 Details \u00b7 features", height: 844, Component: Features },
  { path: "Description", title: "23 Description & add-ons", height: 844, Component: Description },
  { path: "ForYou", title: "24 For you", height: 844, Component: ForYou },
  { path: "Usage", title: "25 Lenses \u00b7 usage", height: 844, Component: Usage },
  { path: "UsageReaders", title: "26 Usage \u00b7 readers selected", height: 844, Component: UsageReaders },
  { path: "Progressives", title: "27 Progressive options", height: 844, Component: Progressives },
  { path: "BifocalSheet", title: "28 Bifocal info sheet", height: 844, Component: BifocalSheet },
  { path: "LensType", title: "29 Lens type", height: 844, Component: LensType },
  { path: "IDGuard", title: "30 ID Guard options", height: 844, Component: IDGuard },
  { path: "Specialty", title: "31 Specialty lenses", height: 844, Component: Specialty },
  { path: "LensIndex", title: "32 Lens index", height: 844, Component: LensIndex },
  { path: "Coating", title: "33 Lens coating", height: 844, Component: Coating },
  { path: "AddOns", title: "34 Add-ons", height: 844, Component: AddOns },
  { path: "ReviewOrder", title: "35 Review selections", height: 844, Component: ReviewOrder },
  { path: "CartFull", title: "36 Cart \u00b7 with items", height: 844, Component: CartFull },
  { path: "ProfileGuest", title: "37 Profile \u00b7 guest", height: 844, Component: ProfileGuest },
  { path: "SignIn", title: "38 Sign in", height: 844, Component: SignIn },
  { path: "ProfileMenu", title: "39 Profile \u00b7 signed in", height: 844, Component: ProfileMenu },
  { path: "Accessories", title: "40 Categories \u00b7 accessories", height: 844, Component: Accessories },
  { path: "MyLook", title: "41 My Look \u00b7 empty", height: 844, Component: MyLook },
  { path: "TryOnFit", title: "42 Try-on \u00b7 fit check", height: 844, Component: TryOnFit },
];

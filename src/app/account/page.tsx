import ChooseAccount from "./ChooseAccount";

export const metadata = {
  title: "Account | Clash Shop",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function AccountPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <ChooseAccount />
    </main>
  );
}

import DropdownMenu from "../components/dropdown-menu.tsx";

function Page() {
  return (
    <>
      <div class="flex flex-col gap-4 p-6">
        <h1 class="w-full text-center text-2xl">Recipes</h1>
        <h2 class="w-full text-center text-lg text-gray-700">
          Common UI design patterns with performance in mind
        </h2>
      </div>

      <ul class="flex flex-col p-6 gap-4">
        <li class="flex flex-col gap-4">
          <h3>Dropdown Menu</h3>
          <DropdownMenu />
        </li>
      </ul>
    </>
  );
}

export default Page;

import { ComponentChildren } from "preact";

function Text({ children }: { children: ComponentChildren }) {
  return (
    <span class="block text-center p-6 border border-gray-100 bg-white hover:bg-gray-100">
      {children}
    </span>
  );
}

function DropdownMenu() {
  return (
    <ul class="flex">
      <li class="group">
        <Text>
          Menu Item 1
        </Text>
        <ul class="hidden group-hover:block">
          <li>
            <Text>Subitem 1</Text>
          </li>
          <li>
            <Text>Subitem 2</Text>
          </li>
          <li>
            <Text>Subitem 3</Text>
          </li>
        </ul>
      </li>
      <li class="group">
        <Text>
          Menu Item 2
        </Text>
        <ul class="hidden group-hover:block">
          <li>
            <Text>Subitem 4</Text>
          </li>
          <li>
            <Text>Subitem 5</Text>
          </li>
          <li>
            <Text>Subitem 6</Text>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default DropdownMenu;

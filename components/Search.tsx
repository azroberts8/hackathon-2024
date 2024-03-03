import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

import { Handlers } from "$fresh/server.ts";

export function Search() {
  return (
    <div class="inline-flex flex-row justify-center relative text-gray-500">
      <div class="relative">
        <input id="searchBox" type="text" class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="AAPL" />
        <svg class="w-12 h-10 absolute left-1 top-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <button id="searchButton" class="bg-indigo-600 text-white p-2 text-lg font-semibold py-4 rounded-r-md">Go</button>
      </div>
      <script src="/jank-script.js"></script>
    </div>
  );
}
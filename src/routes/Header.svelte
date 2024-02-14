<script>
  let menu = false;
</script>

<nav class="navbar">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">Home</a>
  </div>

  <div class="flex-none">
    <button
      on:click|preventDefault={() => (menu = !menu)}
      class="btn btn-square btn-ghost"
      type="button"
      title="Menu"
    >
      {#if !menu}
        <svg
          class="h-6 w-6"
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          ></path>
        </svg>
      {:else}
        <svg
          class="h-6 w-6"
          data-slot="icon"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          ></path>
        </svg>
      {/if}
    </button>
  </div>
</nav>

{#if menu}
  <ul
    class="mb-16 mt-8 text-center text-lg font-semibold text-base-content/60 mx-auto max-w-screen-md select-none"
  >
    <li>
      <a
        class="block py-2 hover:text-base-content aria-[current=true]:text-base-content"
        href="/">Home</a
      >
    </li>
  </ul>
{/if}

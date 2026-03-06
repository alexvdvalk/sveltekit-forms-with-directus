<script lang="ts">
  import { submitForm } from "$lib/forms.remote";
</script>

<div class="flex justify-center mt-10">
  <form class="space-y-4 max-w-md w-96 p-4 border rounded" {...submitForm}>
    <div class="flex flex-col gap-1">
      <label for="name" class="font-medium">Name</label>
      <input
        {...submitForm.fields.name.as("text")}
        class="border rounded px-3 py-2"
      />
      {#each submitForm.fields.name.issues() as issue}
        <p class="text-red-500 text-bold">{issue.message}</p>
      {/each}
    </div>

    <div class="flex flex-col gap-1">
      <label for="email" class="font-medium">Email</label>
      <input
        {...submitForm.fields.email.as("text")}
        class="border rounded px-3 py-2"
      />
      {#each submitForm.fields.email.issues() as issue}
        <p class="text-red-500 text-bold">{issue.message}</p>
      {/each}
    </div>

    <div class="flex flex-col gap-1">
      <label for="message" class="font-medium">Message</label>
      <textarea
        {...submitForm.fields.message.as("text")}
        class="border rounded px-3 py-2 min-h-[120px]"
      ></textarea>
      {#each submitForm.fields.message.issues() as issue}
        <p class="text-red-500 text-bold">{issue.message}</p>
      {/each}
    </div>

    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Send
    </button>

    {#if submitForm.result?.success}
      <p class="text-green-500 text-bold">Form submitted successfully</p>
    {/if}
  </form>
</div>

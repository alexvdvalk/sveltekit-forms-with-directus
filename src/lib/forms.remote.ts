import { form } from '$app/server';
import { z } from 'zod';
import { directus } from '$lib/server/directus';
import { createItem } from '@directus/sdk';
import { error } from '@sveltejs/kit';

const formSchema = z.object({
    name: z.string().min(5),
    email: z.email(),
    message: z.string().min(1),
});


export const submitForm = form(formSchema, async (data) => {
    const { name, email, message } = data;

    try {
        await directus.request(createItem("contact_form", {
            name,
            email,
            message
        }));
        return {
            success: true,
            message: 'Form submitted successfully'
        };
    } catch {
        error(500, 'Failed to submit form');
    }
});

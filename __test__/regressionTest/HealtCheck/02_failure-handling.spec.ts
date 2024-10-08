import { expect, test as base } from '@playwright/test';
import { Actor } from '@testla/screenplay';
import {
    BrowseTheWeb, Navigate, Click, Element,
} from '../../../src/web';

type MyActors = {
    actor: Actor;
};

/**
 * Represents a test case for failure handling.
 */
const test = base.extend<MyActors>({
    actor: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const actor = Actor.named('TestActor')
            .can(BrowseTheWeb.using(page));
        await use(actor);
    },
});

test.describe('Testing screenplay-playwright-js failure handling', () => {
    test('orSkipOnFail', async ({ actor }) => {
        await actor.attemptsTo(
            Navigate.to('https://app-staging.finkargo.com.co/auth/signup'),
            Click.on('#not-existing-element', { timeout: 1000 }).orSkipOnFail,
        );
    });

    test('failAsFalse', async ({ actor }) => {
        await actor.attemptsTo(
            Navigate.to('https://app-staging.finkargo.com.co/auth/signup'),
        );

        const shallBeFalse = await actor.asks(
            Element.toBe.visible('#not-existing-element', { timeout: 1000 }).failAsFalse,
        );

        await expect(shallBeFalse).toBe(false);
    });
});

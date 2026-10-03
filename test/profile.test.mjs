// The organisation profile's links: each is an absolute https URL, each repository link names a
// ZeroCaptcha repository, and none is listed twice in the same place.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const profile = readFileSync(new URL("../profile/README.md", import.meta.url), "utf8");
const links = [...profile.matchAll(/\]\(([^)\s]+)\)/g)].map((match) => match[1]);

test("the profile has links", () => {
  assert.ok(links.length >= 10, `only ${links.length} links`);
});

test("every link is an absolute https URL", () => {
  for (const link of links) {
    const url = new URL(link);
    assert.equal(url.protocol, "https:", link);
  }
});

test("every repository link names a ZeroCaptcha repository", () => {
  const repositories = links.filter((link) => new URL(link).hostname === "github.com");
  assert.ok(repositories.length > 0);
  for (const link of repositories) {
    assert.match(
      link,
      /^https:\/\/github\.com\/ZeroCaptcha\/[A-Za-z0-9._-]+(?:#[a-z0-9-]+)?$/,
      link,
    );
  }
});

test("no repository is linked twice in the table", () => {
  const table = profile.split("\n").filter((line) => line.startsWith("|"));
  const repositories = table.flatMap((line) =>
    [...line.matchAll(/\]\((https:\/\/github\.com\/[^)]+)\)/g)].map((match) => match[1]),
  );
  assert.equal(new Set(repositories).size, repositories.length);
});

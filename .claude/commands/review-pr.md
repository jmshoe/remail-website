---
description: Review a pull request for code quality and best practices
argument-hint: <pr-number-or-branch>
allowed-tools: Bash(git:*), Bash(gh:*), Read, Grep, Glob
---

# Review Pull Request

Review a pull request for code quality, SEO impact, and best practices.

## Arguments
- `$ARGUMENTS`: PR number or branch name to review

## Review Checklist

### 1. Code Quality
- TypeScript types are properly defined
- No `any` types without justification
- Error handling is appropriate
- Code is readable and well-structured
- No console.logs or debug code
- Follows existing patterns in codebase

### 2. Security
- No secrets or API keys in code
- User input is properly validated
- SQL injection prevention (parameterized queries)
- XSS prevention (proper escaping)
- Authentication/authorization checks in place

### 3. Performance
- No N+1 queries
- Large lists are paginated
- Images use next/image
- Heavy computations are memoized if needed
- No unnecessary re-renders

### 4. SEO Impact
- Meta tags preserved/improved
- Semantic HTML maintained
- Accessibility attributes present
- No breaking URL changes without redirects
- Structured data intact

### 5. Testing
- Tests cover new functionality
- Edge cases considered
- No flaky tests introduced

### 6. Documentation
- Complex logic is commented
- README updated if needed
- CLAUDE.md updated if architecture changed

## Review Process

1. Fetch the PR branch:
   ```bash
   gh pr checkout $ARGUMENTS
   ```

2. Review changed files:
   ```bash
   gh pr diff $ARGUMENTS
   ```

3. Run tests locally:
   ```bash
   npm run test
   ```

4. Check build succeeds:
   ```bash
   npm run build
   ```

5. Provide feedback with specific line references

## Output Format

Provide review as:
- **Approve**: Ready to merge
- **Request Changes**: Must fix before merge (list issues)
- **Comment**: Suggestions, questions, or minor improvements

Include specific file:line references for all feedback.

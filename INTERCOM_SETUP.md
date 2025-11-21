# Intercom Integration Setup Guide

## Installation

Intercom has been integrated into your Next.js project. Follow these steps to complete the setup:

### 1. Add Environment Variables

Add your Intercom App ID to your `.env.local` file:

```bash
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id_here
```

You can find your App ID in the [Intercom Messenger settings](https://app.intercom.com/a/apps/_/settings/messenger).

### 2. Usage Examples

#### Identify a User

When a user logs in, identify them in Intercom:

```typescript
import { intercomUtils } from '@/utils/intercomUtils';

// After successful login
intercomUtils.identifyUser('user_123', {
  email: 'user@example.com',
  name: 'John Doe',
  phone: '1234567890',
  // Add any custom attributes
  subscription_type: 'premium',
  signup_date: '2024-01-15'
});
```

#### Track Events

Track user actions for analytics:

```typescript
intercomUtils.trackEvent('subscription_purchased', {
  subscription_id: 'sub_123',
  amount: 99.99,
  currency: 'USD'
});
```

#### Open/Close Messenger

```typescript
// Open the Intercom messenger
intercomUtils.open();

// Close the messenger
intercomUtils.hide();

// Show the messenger
intercomUtils.show();
```

#### Send a Message

Prompt the user with a pre-filled message:

```typescript
intercomUtils.sendMessage('Hello! How can we help you?');
```

#### Update User Information

```typescript
intercomUtils.updateUser({
  email: 'newemail@example.com',
  name: 'Jane Doe',
  custom_attributes: {
    plan_status: 'active'
  }
});
```

#### Logout User

When a user logs out, shutdown Intercom:

```typescript
intercomUtils.shutdown();
```

### 3. Integration Points (Recommended)

**In your login component** - Identify the user after successful authentication
**In your account page** - Update user information when they change settings
**On key actions** - Track important events like purchases, subscriptions, etc.
**On logout** - Call shutdown to clear user data

### 4. Files Created

- `src/providers/IntercomProvider.tsx` - React Provider component
- `src/utils/intercomUtils.ts` - Utility functions for Intercom interactions
- This documentation file

### 5. Next Steps

1. Get your Intercom App ID from https://app.intercom.com
2. Add it to `.env.local`
3. Use the utility functions throughout your app
4. Test in development with `npm run dev`

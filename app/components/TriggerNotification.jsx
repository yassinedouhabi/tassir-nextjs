'use client';

import React from 'react';
import { useNotifications } from '@/components/NotificationCenter/use-notifications';
import { Button } from '@/components/ui/button';

export default function TriggerNotification() {
  const { add } = useNotifications();

  return (
    <div className="p-4">
      <Button
        onClick={() => add('You have a new notification!')}
      >
        Trigger Notification
      </Button>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Bell, CheckCircle, Trash } from 'lucide-react';
import { useNotifications } from './use-notifications';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

export default function NotificationCenter() {
  const {
    notifications,
    markAllRead,
    clearAll,
    markReadById,
    deleteById,
  } = useNotifications();

  const unreadCount = notifications.filter(
    (n) => !n.read
  ).length;
  const maxCount = 9;
  const displayCount =
    unreadCount > maxCount ? `+${maxCount}` : unreadCount;

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  // Pending action and target id (id null for bulk actions)
  const [pendingAction, setPendingAction] = useState({
    type: null,
    id: null,
  });

  function openConfirm(type, id = null) {
    setPendingAction({ type, id });
    setDialogOpen(true);
  }

  function confirmAction() {
    const { type, id } = pendingAction;
    if (type === 'read') {
      if (id) {
        markReadById(id);
      } else {
        markAllRead();
      }
    } else if (type === 'delete') {
      if (id) {
        deleteById(id);
      } else {
        clearAll();
      }
    }
    setDialogOpen(false);
    setPendingAction({ type: null, id: null });
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative p-2">
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1.5">
                {displayCount}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-80">
          <div className="px-4 py-2 font-semibold text-sm border-b">
            Notifications
          </div>

          <div className="max-h-64 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-sm text-muted-foreground">
                No notifications.
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`px-4 py-2 text-sm border-b flex justify-between items-center ${
                    n.read
                      ? 'text-muted-foreground'
                      : 'font-semibold'
                  }`}
                >
                  <div>
                    <div>{n.message}</div>
                    <div className="text-xs text-muted-foreground">
                      {n.time.toLocaleTimeString()}
                    </div>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    {!n.read && (
                      <Button
                        size="icon"
                        variant="outline"
                        aria-label="Mark as read"
                        onClick={() =>
                          openConfirm('read', n.id)
                        }
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      size="icon"
                      variant="destructive"
                      aria-label="Delete notification"
                      onClick={() =>
                        openConfirm('delete', n.id)
                      }
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="flex justify-between p-2 border-t space-x-2">
              <Button
                onClick={() => openConfirm('read')}
                variant="ghost"
                className="flex-1 text-sm"
              >
                Mark all as read
              </Button>
              <Button
                onClick={() => openConfirm('delete')}
                variant="ghost"
                className="flex-1 text-sm text-red-600 hover:bg-red-50"
              >
                Delete all
              </Button>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Confirmation Dialog */}
      <Dialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">
            {pendingAction.type === 'read' &&
              pendingAction.id && (
                <>
                  Do you want to mark this notification as
                  read?
                </>
              )}
            {pendingAction.type === 'read' &&
              !pendingAction.id && (
                <>
                  Do you want to mark all notifications as
                  read?
                </>
              )}
            {pendingAction.type === 'delete' &&
              pendingAction.id && (
                <>
                  Do you want to delete this notification?
                </>
              )}
            {pendingAction.type === 'delete' &&
              !pendingAction.id && (
                <>
                  Do you want to delete all notifications?
                </>
              )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={confirmAction}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

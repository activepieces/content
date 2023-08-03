import { ActionType, FlowTemplate, TriggerType } from "@activepieces/shared";
import { ActionBase, DetailedPiece,  TriggerBase } from "../utils/piece-helper";

export type ActionApp = {
    appName: string;
    icon: string;
    displayName: string;
    actionName: string;
};

export type TriggerApp = {
    appName: string;
    displayName: string;
    iconUrl: string;
    triggerName: string;
    bannerUrl: string,
    templateText: string
};

export interface CenterOfWorldCard {
    triggerApp: TriggerApp,
    actionApp: ActionApp,
    template:FlowTemplate
}

export const appsUserChanges: ActionApp[] = [
    {
        appName: '@activepieces/piece-slack',
        icon: 'https://cdn.activepieces.com/pieces/slack.png',
        displayName: 'Slack',
        actionName: 'send_channel_message',
    },
    {
        appName: '@activepieces/piece-telegram-bot',
        icon: 'https://cdn.activepieces.com/pieces/telegram_bot.png',
        displayName: 'Telgram',
        actionName: 'send_text_message',
    },
    {
        appName: '@activepieces/piece-matrix',
        icon: 'https://cdn.activepieces.com/pieces/matrix.png',
        displayName: 'Matrix',
        actionName: 'send_message',
    },
    {
        appName: '@activepieces/piece-mattermost',
        icon: 'https://cdn.activepieces.com/pieces/mattermost.png',
        displayName: 'Mattermost',
        actionName: 'send_message',
    },
    {
        appName: '@activepieces/piece-discord',
        icon: 'https://cdn.activepieces.com/pieces/discord.png',
        displayName: 'Discord',
        actionName: 'send_message_webhook',
    },

];

export const appsUsedAlways: TriggerApp[] = [
    {
        iconUrl: 'https://cdn.activepieces.com/pieces/stripe.png',
        bannerUrl: "/centeralize/stripe.png",
        templateText: `Celebrate new Stripe subscriptions with your team`,
        displayName: 'Stripe',
        appName: '@activepieces/piece-stripe',
        triggerName: 'new_subscription'
    },
    {
        iconUrl: "https://cdn.activepieces.com/pieces/calendly.png",
        bannerUrl: "/centeralize/calendly.png",
        templateText: "Put your new Calendly bookings in front of your team",
        displayName: 'Calendly',
        appName: "@activepieces/piece-calendly",
        triggerName: 'invitee_created'
    },
    {
        iconUrl: "https://cdn.activepieces.com/pieces/pipedrive.png",
        bannerUrl: "/centeralize/pipedrive.png",
        templateText: "Throw a party when a Pipedrive deal is won",
        displayName: 'Pipedrive',
        appName: "@activepieces/piece-pipedrive",
        triggerName: 'new_deal'
    }
    ,
    {
        iconUrl: "https://cdn.activepieces.com/pieces/clickup.png",
        bannerUrl: "/centeralize/clickup.png",
        templateText: "Keep your team posted on new ClickUp tasks",
        displayName: 'ClickUp',
        appName: '@activepieces/piece-clickup',
        triggerName: 'clickup_trigger_task_created',

    },
    {
        iconUrl: "https://cdn.activepieces.com/pieces/google-forms.png",
        bannerUrl: "/centeralize/google-forms.png",
        templateText: "Post your Google Form submissions to your team",
        displayName: 'Google Forms',
        appName: '@activepieces/piece-google-forms',
        triggerName: 'new_response'
    },
    {
        iconUrl: "https://cdn.activepieces.com/pieces/mailchimp.png",
        bannerUrl: "/centeralize/mailchimp.png",
        templateText: "Share new Mailchimp subscribers with your team",
        displayName: 'Mailchimp',
        appName: '@activepieces/piece-mailchimp',
        triggerName: 'subscribe'
    }
]


const baseTemplate: FlowTemplate = {
    "id": "jyEi8zZkVYIiP4nqWrH85",
    "name": "",
    "description": "",
    "tags": [],
    "pieces": [],
    "pinnedOrder": null,
    "blogUrl": "",
    "template": {
        "displayName": "Trying Activepieces!",
        "trigger": {
            "name": "trigger",
            "valid": false,
            "displayName": "",
            "nextAction": {
                "name": "step_1",
                "type": ActionType.PIECE,
                "valid": false,
                "settings": {
                    "input": {},
                    "pieceName": "",
                    "actionName": "",
                    "inputUiInfo": {},
                    "pieceVersion": ""
                },
                "displayName": ""
            },
            "type": TriggerType.PIECE,
            "settings": {
                "pieceName": "",
                "pieceVersion": "",
                "triggerName": "",
                "input": {},
                "inputUiInfo": {}
            }
        },
        "valid": false
    }
}
export const aiTemplates = [
    {
      id: 'ai-content-gen',
      piecesIcons: ['https://cdn.activepieces.com/pieces/google-sheets.png', 'https://cdn.activepieces.com/pieces/openai.png'],
      description: 'Scale your SEO content with ChatGPT right into your WordPress site'
    },
    {
      id: 'ai-translate-tweet-rss',
      piecesIcons: ['https://cdn.activepieces.com/pieces/rss.png', 'https://cdn.activepieces.com/pieces/openai.png'],
      description: 'Tweet RSS items automatically after translation with ChatGPT'
    },
    {
      id: 'ai-personalized-welcome-email-mailchimp',
      piecesIcons: ['https://cdn.activepieces.com/pieces/mailchimp.png', 'https://cdn.activepieces.com/pieces/openai.png'],
      description: 'Send automated welcome emails with ChatGPT to MailChimp subscribers'
    },
    {
      id: 'ai-long-blog-posts',
      piecesIcons: ['https://cdn.activepieces.com/pieces/google-sheets.png', 'https://cdn.activepieces.com/pieces/openai.png'],
      description: 'Write 1,500+ words blog posts with ChatGPT in WordPress'
    },
    {
      id: 'ai-sms-customer-service',
      piecesIcons: ['https://cloud.activepieces.com/assets/img/custom/piece/webhook_mention.png', 'https://cloud.activepieces.com/assets/img/custom/piece/store_mention.png'],
      description: 'Build an SMS customer service agent with ChatGPT'
    },
    {
      id: 'ai-engaging-tweet',
      piecesIcons: ['https://cloud.activepieces.com/assets/img/custom/piece/schedule_mention.png', 'https://cdn.activepieces.com/pieces/openai.png'],
      description: 'Post engaging Tweets to your audience with ChatGPT'
    },
  ]
  
  type TemplateDeps = {
    trigger: {
      pieceName: string;
      triggerName: string;
    };
    action: {
      pieceName: string;
      actionName: string;
    };
    description: string;
  };
  
  export const leadsTemplatesDeps: TemplateDeps[] = [
    {
      trigger: {
        pieceName: "@activepieces/piece-facebook-leads",
        triggerName: "new_lead"
      },
      action: {
        pieceName: "@activepieces/piece-hubspot",
        actionName: "create_contact"
      },
      description: "Add Facebook Leads as HubSpot Contacts"
    },
    {
      trigger:
      {
        pieceName: "@activepieces/piece-typeform",
        triggerName: "new_submission"
      },
      action: {
        pieceName: "@activepieces/piece-mailchimp",
        actionName: "add_member_to_list"
      },
      description: "Create MailChimp subscribers from Typeform responses"
    },
    {
      trigger: {
        pieceName: "@activepieces/piece-stripe",
        triggerName: "new_customer"
      },
      action: {
        pieceName: "@activepieces/piece-gmail",
        actionName: "send_email"
      },
      description: "Send emails to new customers on Stripe"
    }
  ]
  
  export const productivityTemplatesDeps: TemplateDeps[] = [
    {
      action: {
        pieceName: '@activepieces/piece-trello',
        actionName: 'create_card'
      },
      trigger: {
        triggerName: 'new_or_updated_event',
        pieceName: '@activepieces/piece-google-calendar'
      },
      description: 'Create Trello cards from new Google Calendar events'
    },
    {
      action: {
        pieceName: '@activepieces/piece-slack',
        actionName: 'send_channel_message'
      },
      trigger: {
        pieceName: '@activepieces/piece-schedule',
        triggerName: 'every_week'
      },
      description: 'Send a Slack reminder to your team every week'
    },
    {
      action: { pieceName: '@activepieces/piece-google-docs', actionName: 'create_document' },
      trigger: { triggerName: "new_or_updated_event", pieceName: "@activepieces/piece-google-calendar" },
      description: 'Create agenda Google Docs for new Google Calendar events'
    }
  ]

export const generateTemplateFromDependencies = (description:string,pieces:DetailedPiece[],trigger:{pieceName:string,triggerName:string}, action:{pieceName:string,actionName:string}) => {
    const selectedTriggerPiece = pieces.find((piece) => piece.name === trigger.pieceName);
    const selectedActionPiece = pieces.find((piece) => piece.name === action.pieceName);
    const selectedTrigger = selectedTriggerPiece?.triggers[trigger.triggerName];
    const selectedAction = selectedActionPiece?.actions[action.actionName];
    if(!selectedTriggerPiece || !selectedActionPiece || !selectedTrigger || !selectedAction) {
       throw Error("Invalid trigger or action "+JSON.stringify(trigger)+JSON.stringify(action) ) 
    }
    return {
        template:generateTemplate(selectedTriggerPiece,selectedTrigger,selectedActionPiece,selectedAction,description), 
        piecesIcons:[selectedTriggerPiece.logoUrl,selectedActionPiece.logoUrl]
    };
};

    const generateTemplate = (selectedTriggerPiece:DetailedPiece,selectedTrigger:TriggerBase,selectedActionPiece:DetailedPiece,selectedAction:ActionBase,description:string) => {
        const template:FlowTemplate = JSON.parse(JSON.stringify(baseTemplate));
        template.description = description;
        template.template.trigger.settings.pieceName = selectedTriggerPiece.name;
        template.template.trigger.settings.pieceVersion = `~${selectedTriggerPiece.version}`;
        template.template.trigger.settings.triggerName = selectedTrigger.name;
        template.template.trigger.displayName = selectedTrigger.displayName;
        template.template.trigger.valid = Object.keys(selectedTrigger.props).filter((key) => selectedTrigger.props[key].required).length === 0;
        template.template.trigger.nextAction.settings.pieceName = selectedActionPiece.name;
        template.template.trigger.nextAction.settings.pieceVersion = `~${selectedActionPiece.version}`;
        template.template.trigger.nextAction.settings.actionName = selectedAction.name;
        template.template.trigger.nextAction.displayName = selectedAction.displayName;
        template.template.trigger.nextAction.valid = Object.keys(selectedAction.props).filter((key) => selectedAction.props[key].required).length === 0;
        template.template.valid = false;
        template.template.displayName = `${selectedTrigger.displayName} + ${selectedAction.displayName}`;
        template.name = `${selectedTrigger.displayName} + ${selectedAction.displayName}`;
        return template
    }
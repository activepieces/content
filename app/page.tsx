
import { Metadata } from 'next';
import MainSection from '../components/landing-page/MainSection';
import OpenSourceSection from '../components/landing-page/OpenSourceSection';
import AiSection from '../components/landing-page/AiSection';
import { FlowTemplate, TriggerType } from '@activepieces/shared';
import { GetPiece } from '../utils/piece-helper';
import LeadsSection from '../components/landing-page/LeadsSection';
import Productivity100XSection from '../components/landing-page/Productivity100XSection';
import CenterOfWorldSection from '../components/landing-page/CenterOfWorldSection';
import CombinationsMakerSection from '../components/landing-page/CombinationsMakerSection';
import { AutomateWithActivepieces } from '../components/animated-curtains/AutomateWithActivepieces';
import { ComparisionSection } from '../components/landing-page/ComparisonSection';
import { PiecesDictionarySection } from '../components/landing-page/PiecesDictionarySection';

export const metadata: Metadata = {
  title: 'Activepieces - Home',
  icons: "/favicon.ico",
}

const template: FlowTemplate = {
  "id": "ai-personalized-welcome-email-mailchimp",
  "name": "Send ChatGPT welcome email to MailChimp new subscribers",
  "description": `Scale SEO with ChatGPT into your WordPress site`,
  "tags": [],
  "pieces": [
    "@activepieces/piece-mailchimp",
    "@activepieces/piece-openai",
    "@activepieces/piece-sendgrid"
  ],
  "pinnedOrder": null,
  "blogUrl": "",
  "template": {
    "displayName": "Send ChatGPT welcome email to MailChimp new subscribers",
    "trigger": {
      "name": "trigger",
      "valid": false,
      "displayName": "Member Subscribed to Audience",
      "nextAction": {
        "name": "step_1",
        "type": "PIECE",
        "valid": false,
        "settings": {
          "input": {
            "prompt": "Write a welcome email to this person:{{trigger}}\n\nStrictly return a JSON object that has two fields, \"subject\" and \"message\".\n\nPersonalize the message according to the person object above. Mention a unique historic event that happened on the same day of their registration in the past (only use accurate information for this).\n\nContext about our business (the senders of the email):\nWe are a group of readers, and the user has signed up for our weekly newsletter of book recommendation."
          },
          "pieceName": "@activepieces/piece-openai",
          "actionName": "ask_chatgpt",
          "inputUiInfo": {},
          "pieceVersion": "~0.2.5"
        },
        "nextAction": {
          "name": "step_3",
          "type": "CODE",
          "valid": true,
          "settings": {
            "input": {
              "chatgpt": "{{step_1}}"
            },
            "inputUiInfo": {},
            "artifact": "UEsDBAoAAAAAAKoEvlYaCx9KUgAAAFIAAAAIAAAAaW5kZXgudHNleHBvcnQgY29uc3QgY29kZSA9IGFzeW5jIChpbnB1dHMpID0+IHsKICAgIHJldHVybiBKU09OLnBhcnNlKGlucHV0cy5jaGF0Z3B0KTsKfTsKUEsDBAoAAAAAAKoEvlYaUtEIHAAAABwAAAAMAAAAcGFja2FnZS5qc29uewogICJkZXBlbmRlbmNpZXMiOiB7CiAgfQp9ClBLAQIUAAoAAAAAAKoEvlYaCx9KUgAAAFIAAAAIAAAAAAAAAAAAAAAAAAAAAABpbmRleC50c1BLAQIUAAoAAAAAAKoEvlYaUtEIHAAAABwAAAAMAAAAAAAAAAAAAAAAAHgAAABwYWNrYWdlLmpzb25QSwUGAAAAAAIAAgBwAAAAvgAAAAAA"
          },
          "nextAction": {
            "name": "step_2",
            "type": "PIECE",
            "valid": false,
            "settings": {
              "input": {
                "to": [
                  "{{trigger.data.email}}"
                ],
                "from": "no-reply@example.com",
                "content": "{{step_3.message}}",
                "subject": "{{step_3.subject}}",
                "from_name": "Our Business",
                "content_type": "text"
              },
              "pieceName": "@activepieces/piece-sendgrid",
              "actionName": "send_email",
              "inputUiInfo": {},
              "pieceVersion": "~0.2.3"
            },
            "displayName": "Send Email"
          },
          "displayName": "Code"
        },
        "displayName": "Ask ChatGPT"
      },
      "type": TriggerType.PIECE,
      "settings": {
        "pieceName": "@activepieces/piece-mailchimp",
        "pieceVersion": "~0.2.1",
        "triggerName": "subscribe",
        "input": {
          "list_id": "2ae2f814cd"
        },
        "inputUiInfo": {}
      }
    },
    "valid": false
  }
}

const AiCardPropsGenerator = async (template: FlowTemplate) => {
  const piecesIcons = await Promise.all(template.pieces.map(async (piece) => {
    const pieceData = await GetPiece(piece);
    return pieceData.logoUrl;
  }));

  return {
    template: template as FlowTemplate,
    piecesIcons: piecesIcons
  }
}
export default async function Home() {
  const aiCard = await AiCardPropsGenerator(template);
  return (
    <>

      <MainSection></MainSection>
      <OpenSourceSection></OpenSourceSection>
      <AiSection props={[aiCard, aiCard, aiCard, aiCard, aiCard, aiCard]}></AiSection>
      <LeadsSection props={[aiCard, aiCard, aiCard]}></LeadsSection>
      <CenterOfWorldSection props={[aiCard, aiCard, aiCard, aiCard, aiCard, aiCard]}></CenterOfWorldSection>
      <Productivity100XSection props={[aiCard, aiCard, aiCard]}></Productivity100XSection>
      <CombinationsMakerSection></CombinationsMakerSection>
      <ComparisionSection></ComparisionSection>
      <AutomateWithActivepieces></AutomateWithActivepieces>
      <PiecesDictionarySection></PiecesDictionarySection>
    </>

  )
}
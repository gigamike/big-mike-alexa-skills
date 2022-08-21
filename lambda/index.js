// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const splashDocument = require('./splashDocument.json');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: splashDocument
            });
        }

        const speakOutput = 'Welcome, you can say Hello or Help. Which would you like to try?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: splashDocument
            });
        }

        const speakOutput = 'Hello Baguio from Big Mike';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const IntroduceMeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'IntroduceMeIntent';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: splashDocument
            });
        }

        const speechText = `Mik Galon A K A Gigamike is a freelance full stack web developer. You ugly piece of shit, afraid of your wife ha ha ha ha ha <audio src="https://gigamike-alexa.s3.amazonaws.com/ssml1.mp3" /> ha ha`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Mik Galon a.k.a Gigamike', speechText)
            .getResponse();
    },
};

const IntroduceMeAgainIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'IntroduceMeAgainIntent';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: splashDocument
            });
        }

        const speechText = 'Mik Galon A K A Gigamike is a freelance full stack  web developer. He is a Zend Certified Engineer, Zend Framework 1 and 2 Certified Engineer, Laravel certified, 8 times AWS certified, and blockchain certified. He is a 12 times hackathon winner and hoping to be an alexa champ someday. <amazon:effect name="whispered">Happy now you piece of shit!</amazon:effect>';

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Mik Galon a.k.a Gigamike', speechText)
            .getResponse();
    },
};

const PlayWakeUpSongOneIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'PlayWakeUpSongOneIntent';
    },
    handle(handlerInput) {
        handlerInput.responseBuilder.addVideoAppLaunchDirective("https://gigamike-alexa.s3.amazonaws.com/momolandboomboom2.mp4", "Momoland", "boomboom");
        return handlerInput.responseBuilder.speak("Playing video").getResponse();
    },
};

const PlayWakeUpSongTwoIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'PlayWakeUpSongTwoIntent';
    },
    handle(handlerInput) {
        handlerInput.responseBuilder.addVideoAppLaunchDirective("https://gigamike-alexa.s3.amazonaws.com/ppap.mp4", "Pikotaro", "P P A P");
        return handlerInput.responseBuilder.speak("Playing video").getResponse();
    },
};

const AdviceAboutGirlsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'AdviceAboutGirlsIntent';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            handlerInput.responseBuilder.addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                document: splashDocument
            });
        }

        const speechText = `The only <emphasis level="strong">advice</emphasis> i can give to you is <audio src="https://gigamike-alexa.s3.amazonaws.com/ssml2.mp3" /> <amazon:effect name="whispered">gets mo</amazon:effect>?`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Advice About Girls', speechText)
            .getResponse();
    },
};

const ZodiacSignIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'ZodiacSignIntent';
    },
    handle(handlerInput) {
        const sign = handlerInput.requestEnvelope.request.intent.slots.ZodiacSign.value;

        switch (sign) {
            case 'aries':
                var speechText = "Aries. You've been in over your head so long, you could be a stunt double for The Shape of Water. No man is an island, but that one on your right looks sturdy enough to climb on for a while. Make some small talk until your fingers quit being pruny.";
                break;
            case 'taurus':
                var speechText = "Taurus. Your attention span is so short, you can’t make it through a five second YouTube ad without wondering what else is on. Push pause on your distractions and re-learn how to read the back of the cereal box once again.";
                break;
            case 'gemini':
                var speechText = "Gemini. Actions speak louder than words, and your entire wardrobe is screaming intervention. Next time, don’t ask your next door neighbor in the tube top and 80s Hammer pants to be your personal shopper. Go for the guy dressed in trash bags instead.";
                break;
            case 'cancer':
                var speechText = "Cancer. You may feel fit as a fiddle, but from the back you resemble a double bass. Head to the gym for a musical workout if you want someone to pluck your strings again.";
                break;
            case 'leo':
                var speechText = "Leo. Relax. It isn't your job to keep the world spinning, you just need to give it a freewheeling slap every now and then. It will be fine while you prop up your feet for a few days and check out what’s new on Hulu.";
                break;
            case 'pisces':
                var speechText = "Pisces. After years of reaching for the stars, a wild meteor swings down to offer you a ride. It may turn out to be a UFO, but hop on anyway. Those aliens throw some amazing parties.";
                break;
            case 'virgo':
                var speechText = "Virgo. On Thursday, you stand out more than a game of Where's Waldo at a nudist colony. Give up that woolly hat and pinch some color on all four of your cheeks if you want to fit in.";
                break;
            case 'libra':
                var speechText = "Libra. Your moment is here, and the spotlight is trained on you like a Labrador with a squirrel. No time to hide your nuts now. Get out on that branch, shake your tail and show them all how it's done.";
                break;
            case 'scorpio':
                var speechText = "Scorpio. It takes a big person to admit they're wrong, but you're still shopping in the juniors department. Slide over to the clearance rank and look for a large apology, because you have some growing to do.";
                break;
            case 'sagittarius':
                var speechText = "Sagittarius. The grass is always greener on the other side, unless your dog has been sneaking over there and peeing on it. You may owe someone some fertilizer, but don't ask Fido to volunteer. He's done his duty.";
                break;
            case 'capricorn':
                var speechText = "Capricorn. You finally have the chance to show the world what you're made of! Hopefully it's not Cheetos, Real Housewives specials and laughing at your mailman's Dora the Explorer socks.";
                break;
            case 'aquarius':
                var speechText = "Aquarius. Don't worry about giving bad news to someone. A spoonful of sugar makes the medicine go down, but so does Dollar Jell-O Shots night at your fave club. Their hangover will make your news seem small.";
                break;
            default:
                var speechText = 'Invalid horoscope sign!';
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Zodiac Sign', speechText)
            .getResponse();
    },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
                Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        IntroduceMeIntentHandler,
        IntroduceMeAgainIntentHandler,
        PlayWakeUpSongOneIntentHandler,
        PlayWakeUpSongTwoIntentHandler,
        AdviceAboutGirlsIntentHandler,
        ZodiacSignIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
# chatbot.py

import random

# Sample intents
greetings = ["hello", "hi", "hey", "greetings"]
farewells = ["bye", "goodbye", "see you", "exit"]
thanks = ["thanks", "thank you", "thx"]
responses = {
    "greeting": ["Hello!", "Hi there!", "Hey!", "Greetings!"],
    "farewell": ["Goodbye!", "See you later!", "Take care!"],
    "thanks": ["You're welcome!", "No problem!", "Anytime!"],
    "default": ["I didn't understand that.", "Can you rephrase?", "Hmm... not sure I follow."]
}

def chatbot_response(message):
    message = message.lower()

    if any(word in message for word in greetings):
        return random.choice(responses["greeting"])
    elif any(word in message for word in farewells):
        return random.choice(responses["farewell"])
    elif any(word in message for word in thanks):
        return random.choice(responses["thanks"])
    else:
        return random.choice(responses["default"])

def chat():
    print("🤖 Chatbot: Hello! Type 'exit' to end the chat.")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['exit', 'quit', 'bye']:
            print("🤖 Chatbot:", responses["farewell"][0])
            break
        response = chatbot_response(user_input)
        print("🤖 Chatbot:", response)

if __name__ == "__main__":
    chat()
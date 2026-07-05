const QUESTIONS = {
  "A1": {
    "1": [
      "What is Person 1 asking about?",
      "Where is the object located?",
      "Why might Person 1 have left it there in the first place?"
    ],
    "2": [
      "What does Person 2 ask Person 1?",
      "What is Person 2's name?",
      "Why do people usually ask this question when they meet?"
    ],
    "3": [
      "What does Person 1 ask about?",
      "Does Person 2 like it?",
      "Why might someone answer so enthusiastically about food?"
    ],
    "4": [
      "What does Person 1 want to know?",
      "Where is the place located?",
      "What kind of place might this be, based on being 'near a house'?"
    ],
    "5": [
      "What does Person 1 ask about?",
      "What does Person 2 say about the weather?",
      "What might people do differently on a day like this?"
    ],
    "6": [
      "What does Person 1 want to know?",
      "What time does Person 2 say it is?",
      "What might the two people be about to do next?"
    ],
    "7": [
      "What does Person 1 ask Person 2?",
      "Does Person 2 have one?",
      "Why might someone want to know this before visiting a friend's house?"
    ],
    "8": [
      "What does Person 1 ask about?",
      "What day does Person 2 say it is?",
      "Why might someone need to confirm what day it is?"
    ],
    "9": [
      "What does Person 1 ask for?",
      "What does Person 2 do?",
      "What kind of place are these two people most likely in?"
    ],
    "10": [
      "What does Person 1 ask about?",
      "How often does Person 2 play?",
      "What might Person 2 need in order to play this?"
    ],
    "11": [
      "What does Person 1 ask about?",
      "Is it Person 2's object?",
      "Whose object might it actually be, and why?"
    ],
    "12": [
      "What does Person 1 want to know?",
      "What color does Person 2 like?",
      "Why might someone choose that color as a favorite?"
    ],
    "13": [
      "What does Person 2 ask?",
      "Where does Person 1 live?",
      "What kind of area might this be, based on the answer?"
    ],
    "14": [
      "What does Person 1 ask about?",
      "Who does Person 2 mention?",
      "What might it be like growing up with this family member?"
    ],
    "15": [
      "What does Person 2 ask?",
      "What subject does Person 1 like?",
      "Why might a student enjoy this particular subject?"
    ],
    "16": [
      "What does Person 1 offer?",
      "How does Person 2 respond?",
      "What might happen right after this conversation?"
    ],
    "17": [
      "What does Person 2 ask?",
      "How old is Person 1?",
      "What grade might a student this age be in?"
    ],
    "18": [
      "What does Person 1 ask about?",
      "Where is the family member right now?",
      "What might that person be doing there?"
    ],
    "19": [
      "What does Person 1 ask about?",
      "How often does Person 2 do it?",
      "Why might someone do an activity every single day?"
    ],
    "20": [
      "What does Person 1 ask about?",
      "What is the weather like?",
      "What should someone bring or wear in this weather?"
    ],
    "21": [
      "What does Person 1 ask for?",
      "What does Person 2 offer to do?",
      "Where might they start looking first?"
    ],
    "22": [
      "What does Person 1 ask about?",
      "Who does Person 2 go with?",
      "What might they do once they get there?"
    ],
    "23": [
      "What does Person 2 ask?",
      "What does Person 1 want?",
      "What time of day is this conversation most likely happening?"
    ],
    "24": [
      "What does Person 1 ask about?",
      "Does Person 2 agree?",
      "Why might someone love this particular season?"
    ],
    "25": [
      "What does Person 1 ask about?",
      "What is the pet's name?",
      "What might this pet's personality be like?"
    ],
    "26": [
      "What does Person 2 ask?",
      "What food does Person 1 love?",
      "Where might someone go to eat this food?"
    ],
    "27": [
      "What does Person 1 ask about?",
      "Does Person 2 like the class?",
      "What might make a class someone's favorite?"
    ],
    "28": [
      "What does Person 1 ask about?",
      "Where is the object?",
      "Why might it have ended up there?"
    ],
    "29": [
      "What does Person 1 ask about?",
      "What day is it really?",
      "Why might Person 1 have been confused about the day?"
    ],
    "30": [
      "What does Person 1 suggest?",
      "How does Person 2 respond?",
      "Where might they be about to go play?"
    ],
    "31": [
      "What does Person 1 ask about?",
      "What color is the object?",
      "Why might someone choose that color for this object?"
    ],
    "32": [
      "What does Person 1 ask about?",
      "Does Person 2 enjoy them?",
      "Why might these movies be considered fun?"
    ],
    "33": [
      "What does Person 1 ask about?",
      "Where does the dad work?",
      "What kind of job might he have downtown?"
    ],
    "34": [
      "What does Person 1 suggest?",
      "How does Person 2 feel about it?",
      "What might they do once they arrive there?"
    ],
    "35": [
      "What does Person 1 ask about?",
      "Does Person 2 have it?",
      "Why might it be important to have this with you?"
    ],
    "36": [
      "What does Person 2 ask?",
      "What drink does Person 1 love?",
      "When during the day might someone drink this most?"
    ],
    "37": [
      "What does Person 1 ask about?",
      "Do they like this animal?",
      "Why might people describe this animal as cute?"
    ],
    "38": [
      "What does Person 1 ask about?",
      "Is it cold?",
      "What might someone wear during this season?"
    ],
    "39": [
      "What does Person 1 ask about?",
      "What does Person 2 like doing?",
      "Why might this be a relaxing activity after school?"
    ],
    "40": [
      "What does Person 1 ask about?",
      "What time is it?",
      "What might Person 2 be about to do at this time?"
    ],
    "41": [
      "What does Person 1 ask about?",
      "Where does the family member work?",
      "What might a normal day look like for someone in that job?"
    ],
    "42": [
      "What does Person 1 offer?",
      "How does Person 2 respond?",
      "How hungry does Person 2 seem to be?"
    ],
    "43": [
      "What does Person 2 ask?",
      "What sport does Person 1 love?",
      "Where might someone play this sport?"
    ],
    "44": [
      "What does Person 1 ask for?",
      "How does Person 2 respond?",
      "Why might Person 1 not have their own?"
    ],
    "45": [
      "What does Person 1 ask about?",
      "Does Person 2 like this color?",
      "Why might this be someone's favorite color?"
    ],
    "46": [
      "What does Person 1 ask about?",
      "Is the animal Person 2's?",
      "What might this animal's daily routine look like?"
    ],
    "47": [
      "What does Person 1 ask about?",
      "What day is the class?",
      "Why might someone need to know their class schedule?"
    ],
    "48": [
      "What does Person 1 suggest?",
      "How does Person 2 respond?",
      "What might they do once they get there?"
    ],
    "49": [
      "What does Person 1 ask about?",
      "What should someone bring?",
      "Why would someone need a jacket in this weather?"
    ],
    "50": [
      "What does Person 1 ask about?",
      "What are they having?",
      "Who might have prepared this meal?"
    ]
  },
  "A2": {
    "1": [
      "What is Person 1 looking for?",
      "Where did Person 2 last see it?",
      "Where did Person 1 most likely leave it, based on the clue given?"
    ],
    "2": [
      "What does Person 1 ask about?",
      "Who did Person 2 go with?",
      "What might they have done together at that place?"
    ],
    "3": [
      "What does Person 1 suggest?",
      "Has Person 2 tried it before?",
      "Why might Person 2 be a little nervous about trying it?"
    ],
    "4": [
      "What does Person 1 comment on?",
      "What did Person 2 forget?",
      "What should Person 2 do differently next time?"
    ],
    "5": [
      "What does Person 1 ask about?",
      "How often does Person 2 play?",
      "What time of day does Person 2 most likely play, based on the answer?"
    ],
    "6": [
      "What does Person 1 want to know?",
      "What time does the movie start?",
      "How much time do they have left before it starts?"
    ],
    "7": [
      "What does Person 1 ask about?",
      "Has Person 2 finished it?",
      "When will Person 2 most likely finish it?"
    ],
    "8": [
      "Who is visiting?",
      "What does Person 2 suggest?",
      "What season is it, based on the context?"
    ],
    "9": [
      "What did Person 1 lose?",
      "What does Person 2 suggest doing?",
      "Where did Person 1 most likely lose it?"
    ],
    "10": [
      "What does Person 1 ask about?",
      "Which one does Person 2 prefer?",
      "Why might someone prefer one food over another?"
    ],
    "11": [
      "What does Person 1 want to know?",
      "What does the forecast say?",
      "What should someone prepare for tomorrow, based on this forecast?"
    ],
    "12": [
      "What is Person 1 considering?",
      "How does Person 2 react?",
      "What would Person 1 need to prepare before getting this pet?"
    ],
    "13": [
      "What does Person 1 ask for?",
      "Has Person 2 seen one recently?",
      "What kind of movie might Person 2 recommend, based on their answer?"
    ],
    "14": [
      "What does Person 1 ask about?",
      "How long did Person 2 stay?",
      "What might Person 2 have done during a whole week there?"
    ],
    "15": [
      "What does Person 1 want to do this year?",
      "How does Person 2 respond?",
      "Why might learning this be a good goal?"
    ],
    "16": [
      "What job does the family member have?",
      "How does Person 2 react?",
      "What skills might this job require?"
    ],
    "17": [
      "What does Person 1 ask about?",
      "Where is the object now?",
      "Why might Person 2 carry it in a backpack?"
    ],
    "18": [
      "What does Person 1 ask about?",
      "Where is Person 2 going?",
      "What might they do together there?"
    ],
    "19": [
      "What does Person 1 enjoy doing on weekends?",
      "How does Person 2 feel about it?",
      "Why might this activity help someone relax?"
    ],
    "20": [
      "What does Person 1 ask about?",
      "What time will the family member arrive?",
      "What event are they probably attending?"
    ],
    "21": [
      "What does Person 1 ask about?",
      "What does Person 2 love about this season?",
      "Why might this weather be someone's favorite part of the season?"
    ],
    "22": [
      "What does Person 1 ask about?",
      "When did Person 2 last play it?",
      "Why might Person 2 not play this sport anymore?"
    ],
    "23": [
      "What does Person 1 need to buy?",
      "Where does Person 2 suggest looking?",
      "Why might that shop have this kind of item?"
    ],
    "24": [
      "What does Person 1 ask about?",
      "Who does this job?",
      "What does this job likely involve day to day?"
    ],
    "25": [
      "What does Person 1 ask about?",
      "What did Person 2 have?",
      "What meal of the day was this most likely?"
    ],
    "26": [
      "What does Person 1 ask about?",
      "Is Person 2 free then?",
      "What might they plan to do during that free time?"
    ],
    "27": [
      "What is Person 1 nervous about?",
      "How does Person 2 reassure them?",
      "What could Person 1 do now to feel more prepared?"
    ],
    "28": [
      "What does Person 1 ask about?",
      "Where did Person 2 buy it?",
      "Why might someone choose a small shop over a big store?"
    ],
    "29": [
      "What does Person 1 ask about?",
      "Does Person 2 agree?",
      "Why might someone prefer the opposite season?"
    ],
    "30": [
      "What does Person 1 ask about?",
      "Does Person 2 drink it in the morning?",
      "How does this drink help Person 2 during the day?"
    ],
    "31": [
      "What does Person 1 ask about?",
      "What kind of movie did Person 2 pick?",
      "Why might Person 2 hope the choice is okay?"
    ],
    "32": [
      "Who did Person 1 see?",
      "Did the family member mention it?",
      "Why might the family member not have mentioned it?"
    ],
    "33": [
      "What does Person 1 ask for?",
      "How does Person 2 respond?",
      "Where are the two people most likely sitting?"
    ],
    "34": [
      "What does Person 1 ask about?",
      "How long has Person 2 been doing it?",
      "Why might someone stick with a hobby for that long?"
    ],
    "35": [
      "What does Person 1 ask about?",
      "Where is the best place nearby?",
      "Why might this place have a good reputation?"
    ],
    "36": [
      "What does Person 1 predict?",
      "What does Person 2 say about the sky?",
      "What should they do to prepare for the rain?"
    ],
    "37": [
      "What does Person 1 ask about?",
      "Did the team win?",
      "How close was the game, and what might that suggest about the match?"
    ],
    "38": [
      "What is Person 1 considering?",
      "How does Person 2 react?",
      "What steps would Person 1 need to take to pursue this career?"
    ],
    "39": [
      "What does Person 1 ask about?",
      "Where does Person 2 think it is?",
      "Why might Person 2 think it's in that specific place?"
    ],
    "40": [
      "What does Person 1 ask about?",
      "What time do they agree on?",
      "What might they be planning to do at that time?"
    ],
    "41": [
      "What does Person 1 want?",
      "How does Person 2 react?",
      "Why might this color be a good choice for winter?"
    ],
    "42": [
      "What does Person 1 ask about?",
      "How is the family member doing?",
      "Why might Person 1 be checking in on this person?"
    ],
    "43": [
      "What does Person 1 ask about?",
      "Does Person 2 like the class?",
      "What might make this one of Person 2's favorite classes?"
    ],
    "44": [
      "What did Person 1 forget?",
      "Where did they forget it?",
      "What could Person 1 do to stop forgetting it?"
    ],
    "45": [
      "What kind of pet does Person 1 want?",
      "What size does Person 1 want?",
      "Why might someone prefer a smaller pet like this?"
    ],
    "46": [
      "What does Person 1 ask about?",
      "Is Person 2 excited?",
      "Why might this season's holidays be special to Person 2?"
    ],
    "47": [
      "What does Person 1 suggest?",
      "How does Person 2 respond?",
      "Why might they want something warm before class?"
    ],
    "48": [
      "What does Person 1 ask about?",
      "Did Person 2 like the movie?",
      "Why might it have been better than expected?"
    ],
    "49": [
      "What does Person 1 ask about?",
      "Where and when will they meet?",
      "What are they most likely planning to do there?"
    ],
    "50": [
      "What does Person 1 ask about?",
      "Is Person 2 looking forward to it?",
      "Why might Person 2 be excited to play again?"
    ]
  },
  "B1": {
    "1": [
      "What career change is Person 1 considering?",
      "What does Person 2 ask in response?",
      "What might have motivated Person 1 to consider this change?"
    ],
    "2": [
      "What did Person 1 need to finish?",
      "Did they finish it on time?",
      "What might Person 1's work habits be like, based on this answer?"
    ],
    "3": [
      "What is Person 1 unsure about?",
      "What advice does Person 2 give?",
      "What kind of person tends to give this kind of advice?"
    ],
    "4": [
      "What news does Person 1 share?",
      "What does Person 2 ask about?",
      "How might the family member be feeling about this change?"
    ],
    "5": [
      "What has the weather been like?",
      "How is it affecting Person 2?",
      "What could someone do to cope with this kind of weather?"
    ],
    "6": [
      "What has Person 1 picked up recently?",
      "How does Person 2 respond?",
      "Why might this hobby have become an obsession so quickly?"
    ],
    "7": [
      "What has Person 1 noticed?",
      "Does Person 2 agree?",
      "What effect might this have on people's shopping habits?"
    ],
    "8": [
      "What problem does Person 1 have?",
      "What solution does Person 2 suggest?",
      "Why might someone keep losing this particular item?"
    ],
    "9": [
      "What is being planned?",
      "Is Person 2 interested?",
      "Why might Person 2 have wanted to go there for so long?"
    ],
    "10": [
      "What is Person 1 trying to do?",
      "How does Person 2 relate?",
      "Why might mornings feel especially hard for this reason?"
    ],
    "11": [
      "What was assigned?",
      "When is it due?",
      "What might Person 1 need to do to finish this on time?"
    ],
    "12": [
      "What is Person 1 asking about?",
      "How does Person 2 feel about it?",
      "Why might this activity help someone unwind after work?"
    ],
    "13": [
      "What is Person 1 considering adopting?",
      "How long has Person 2 wanted one?",
      "What might Person 2's life be like once they get this pet?"
    ],
    "14": [
      "What subject does Person 1 struggle with?",
      "Does Person 2 relate?",
      "Why might this subject be difficult for many students?"
    ],
    "15": [
      "What job does the cousin have?",
      "How does the cousin describe it?",
      "What might make this job more stressful than people expect?"
    ],
    "16": [
      "What is Person 1 asking about?",
      "What does Person 2 think?",
      "Why might popularity of a sport vary by region?"
    ],
    "17": [
      "What did Person 1 forget?",
      "How does Person 2 respond?",
      "How might Person 1 feel after this embarrassing moment?"
    ],
    "18": [
      "What is Person 1 asking about?",
      "How did Person 2 get started?",
      "Why might a friend's encouragement be enough to start a new hobby?"
    ],
    "19": [
      "What has Person 1 noticed?",
      "Why does Person 2 drink more of it?",
      "What might happen if Person 2 keeps relying on this?"
    ],
    "20": [
      "What does Person 1 ask about?",
      "Does Person 2 regret their choice?",
      "What factors might have led Person 2 to feel this way?"
    ],
    "21": [
      "What has gotten worse?",
      "How much longer does the trip take now?",
      "What could be causing this change near that location?"
    ],
    "22": [
      "What is Person 1 considering?",
      "How does Person 2 react?",
      "What new opportunities might open up with this change?"
    ],
    "23": [
      "Who moved, and why?",
      "How is the family member adjusting?",
      "What might be the hardest part of adjusting to a new place?"
    ],
    "24": [
      "What does Person 1 ask about?",
      "Does the weather look promising?",
      "What should people planning outdoor activities do this weekend?"
    ],
    "25": [
      "What does Person 1 want to ask about?",
      "Is Person 2 willing to help?",
      "Why might Person 1 have chosen to ask this specific person?"
    ],
    "26": [
      "What is Person 1 asking about?",
      "Has Person 2 thought about it?",
      "What might be appealing about getting a pet like this?"
    ],
    "27": [
      "What does Person 1 struggle with?",
      "Does Person 2 relate?",
      "Why might this subject be hard even after years of study?"
    ],
    "28": [
      "What job does the family member have?",
      "How stressful does she find it?",
      "Why might people underestimate how stressful this job is?"
    ],
    "29": [
      "What is Person 1 undecided about?",
      "What does Person 2 say?",
      "What factors should Person 1 weigh before deciding?"
    ],
    "30": [
      "What does Person 1 ask about?",
      "Does Person 2 agree?",
      "How might daily life be different without this kind of object?"
    ],
    "31": [
      "What is Person 1 saving for?",
      "Does Person 2 have a plan yet?",
      "What should Person 1 do first when planning this trip?"
    ],
    "32": [
      "What did the teacher say?",
      "How does Person 2 react?",
      "What should Person 1 do now to prepare?"
    ],
    "33": [
      "What has Person 1 noticed?",
      "Does Person 2 agree?",
      "Why might this hobby have grown so popular recently?"
    ],
    "34": [
      "What does Person 1 ask about?",
      "How does Person 2 feel during this season?",
      "Why might weather affect people's mood this way?"
    ],
    "35": [
      "What news does Person 1 share?",
      "How does Person 2 react?",
      "What might this interview mean for the brother's future?"
    ],
    "36": [
      "What problem does Person 1 have?",
      "What advice does Person 2 give?",
      "Why might keeping something in one place help avoid this issue?"
    ],
    "37": [
      "What is Person 1 asking about?",
      "What does Person 2 think?",
      "Why might a sport require both of these things equally?"
    ],
    "38": [
      "What does Person 1 miss?",
      "Why did they stop eating it?",
      "What might have caused Person 1 to give it up?"
    ],
    "39": [
      "What job has the family member had for years?",
      "How does Person 2 react?",
      "What might make someone stay in a job for over a decade?"
    ],
    "40": [
      "What is Person 1 deciding between?",
      "What does Person 2 say?",
      "Which path might suit Person 1 better, based on their personality?"
    ],
    "41": [
      "What does Person 1 ask about?",
      "Does Person 2 agree they rely on it?",
      "How might people's daily habits change without this?"
    ],
    "42": [
      "What is Person 1 saving for?",
      "Does Person 2 have an itinerary?",
      "What should Person 1 plan first before the trip?"
    ],
    "43": [
      "What did the teacher say about the exam?",
      "How does Person 2 react?",
      "What should the students do now to prepare?"
    ],
    "44": [
      "What has Person 1 noticed?",
      "Does Person 2 agree?",
      "Why might more people be getting into this hobby now?"
    ],
    "45": [
      "What does Person 1 ask about?",
      "How does Person 2 feel during this season?",
      "What could explain this seasonal change in mood?"
    ],
    "46": [
      "What news does Person 1 share?",
      "How does Person 2 react?",
      "What kind of job interview might this be, based on context?"
    ],
    "47": [
      "What problem does Person 1 have?",
      "What does Person 2 suggest?",
      "What habit could help Person 1 avoid this problem in future?"
    ],
    "48": [
      "What is Person 1 asking about?",
      "What does Person 2 think?",
      "Why might this sport need both skill and strength?"
    ],
    "49": [
      "What are they planning to do?",
      "When do they want to go?",
      "Why might they want to go before the crowds arrive?"
    ],
    "50": [
      "What has Person 1 noticed?",
      "How is it affecting sleep?",
      "What could someone do to reduce this effect before bed?"
    ]
  },
  "B2": {
    "1": [
      "What is Person 1 reflecting on?",
      "What does Person 2 suggest doing before deciding?",
      "What kind of trade-offs might this career decision involve?"
    ],
    "2": [
      "What does Person 1 think about the housing market?",
      "Does Person 2 agree?",
      "What long-term effect might this have on the area?"
    ],
    "3": [
      "What does Person 1 question about education?",
      "Does Person 2 agree there's a problem?",
      "What might a more balanced curriculum look like?"
    ],
    "4": [
      "What trend has Person 1 noticed?",
      "How does Person 2 feel about it?",
      "What might be lost as people shift away from this hobby?"
    ],
    "5": [
      "What is Person 1 trying to do?",
      "Why does Person 2 say it's difficult?",
      "What design choices might make this so hard to resist?"
    ],
    "6": [
      "What does Person 1 ask about?",
      "Does Person 2 agree it has changed things?",
      "How might this shift affect the quality of friendships?"
    ],
    "7": [
      "What change does Person 1 ask about?",
      "How does Person 2 respond?",
      "What long-term effect might this shift have on careers?"
    ],
    "8": [
      "What is Person 1 trying to balance?",
      "What does Person 2 warn about?",
      "Why is carving out personal time often so difficult?"
    ],
    "9": [
      "What debate does Person 1 mention?",
      "What does Person 2 think?",
      "Why might this issue affect different students differently?"
    ],
    "10": [
      "What industry trend does Person 1 mention?",
      "How does Person 2 respond?",
      "What long-term effect might this investment have?"
    ],
    "11": [
      "What has Person 1 noticed about friendships?",
      "Does Person 2 agree?",
      "Why might adult friendships require more effort than childhood ones?"
    ],
    "12": [
      "What does Person 1 ask about?",
      "Does Person 2 agree?",
      "What negative effect might this have on self-perception?"
    ],
    "13": [
      "What is Person 1 reconsidering?",
      "What does Person 2 suggest?",
      "What financial factors should Person 1 research first?"
    ],
    "14": [
      "What has disrupted local agriculture?",
      "How does Person 2 react?",
      "What long-term impact might this have on the area's economy?"
    ],
    "15": [
      "What is Person 1 cutting down on?",
      "Does Person 2 approve?",
      "Why might small changes add up more than people expect?"
    ],
    "16": [
      "What does Person 1 ask about?",
      "What does Person 2 say it takes?",
      "What personal habits might help someone maintain this over time?"
    ],
    "17": [
      "What problem has Person 1 read about?",
      "What does Person 2 attribute it to?",
      "What changes could reduce this problem?"
    ],
    "18": [
      "What has pushed people to move?",
      "How common is this story?",
      "What long-term effect might this have on smaller cities?"
    ],
    "19": [
      "What is Person 1 debating?",
      "What does Person 2 say it depends on?",
      "What alternatives might be worth exploring instead?"
    ],
    "20": [
      "What has Person 1 noticed?",
      "Why does Person 2 say it's frustrating?",
      "Why might this topic have become so divisive?"
    ],
    "21": [
      "What does Person 1 ask about?",
      "Does Person 2 agree?",
      "What could be done to reduce this pressure on young athletes?"
    ],
    "22": [
      "What has Person 1 noticed?",
      "How does Person 2 feel about it?",
      "Why might this openness be considered overdue?"
    ],
    "23": [
      "What does Person 1 ask about streaming?",
      "Does Person 2 agree?",
      "What might this mean for the future of traditional TV?"
    ],
    "24": [
      "What change is Person 1 considering?",
      "What does Person 2 think?",
      "What factors should guide this kind of decision?"
    ],
    "25": [
      "What career change did the aunt make?",
      "How does Person 2 describe this change?",
      "What trade-offs come with this kind of career move?"
    ],
    "26": [
      "What does Person 1 ask about education?",
      "Does Person 2 agree there's a gap?",
      "What could close this gap between theory and practice?"
    ],
    "27": [
      "What is Person 1 considering?",
      "How does Person 2 respond?",
      "What might be motivating this desire for change?"
    ],
    "28": [
      "What has this season's weather affected?",
      "How does Person 2 respond?",
      "What does this suggest about the local climate long-term?"
    ],
    "29": [
      "What has gotten more expensive?",
      "Does Person 2 agree?",
      "What effect might this have on how often people socialize?"
    ],
    "30": [
      "What does Person 1 ask about generational values?",
      "Does Person 2 agree?",
      "What might explain this shift in priorities?"
    ],
    "31": [
      "What has Person 1 been reading about?",
      "What trade-off does Person 2 mention?",
      "What risks come with this kind of convenience?"
    ],
    "32": [
      "What has the local government proposed?",
      "How might this affect businesses?",
      "What kind of businesses might be most affected?"
    ],
    "33": [
      "What is Person 1 torn between?",
      "What does Person 2 say about each option?",
      "Which choice might better suit someone seeking new experiences?"
    ],
    "34": [
      "What does Person 1 ask about universities?",
      "Does Person 2 agree?",
      "What could universities change to better prepare students?"
    ],
    "35": [
      "What is the family struggling with?",
      "How does Person 2 respond?",
      "Why might family logistics be harder than expected during holidays?"
    ],
    "36": [
      "What shift has Person 1 noticed?",
      "Why does Person 2 say it's overdue?",
      "What long-term effect might this shift have on workplaces?"
    ],
    "37": [
      "What has become more popular?",
      "What effect has this had on classes?",
      "Why might rising popularity make something harder to access?"
    ],
    "38": [
      "What does Person 1 ask about the curriculum?",
      "Does Person 2 agree it's outdated?",
      "What changes might make the curriculum more relevant?"
    ],
    "39": [
      "What opportunity was the friend offered?",
      "How does Person 2 describe it?",
      "What challenges might come with relocating for this opportunity?"
    ],
    "40": [
      "What is Person 1 assessing?",
      "Does Person 2 think this reflection is healthy?",
      "Why might this kind of reflection be especially useful at this age?"
    ],
    "41": [
      "What does Person 1 ask about video calls?",
      "Does Person 2 fully agree?",
      "What might be lost when friendships move mostly online?"
    ],
    "42": [
      "What new policy was introduced?",
      "What effect has it had?",
      "Why might flexibility reduce stress in this way?"
    ],
    "43": [
      "What ethical concern has Person 1 noticed discussions about?",
      "How does Person 2 react?",
      "Why might accountability have been lacking in this area?"
    ],
    "44": [
      "What did the teacher recommend?",
      "How does Person 2 react?",
      "Why might practical experience matter more than grades in this field?"
    ],
    "45": [
      "What is Person 1 asking about?",
      "Does Person 2 agree uncertainty plays a role?",
      "What kinds of decisions might people delay because of this?"
    ],
    "46": [
      "What is Person 1 trying to do?",
      "Why does Person 2 say it's hard?",
      "Why might this be especially difficult after school ends?"
    ],
    "47": [
      "What investment is the city making?",
      "What effect is it expected to have?",
      "Why might better infrastructure benefit the whole area?"
    ],
    "48": [
      "What does Person 1 ask about nostalgia?",
      "Does Person 2 agree?",
      "Why might people tend to forget the negative parts of the past?"
    ],
    "49": [
      "What is Person 1 doing at school?",
      "How does Person 2 describe this?",
      "Why might mentorship make such a big difference early on?"
    ],
    "50": [
      "What habit does Person 1 want to change?",
      "Does Person 2 relate?",
      "Why might this habit be so hard to break?"
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) module.exports = QUESTIONS;

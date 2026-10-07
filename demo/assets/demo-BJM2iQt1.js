import { S as SERMON_FILE_VERSION, s as slugOf, L as LANGUAGES, B as BOOK_NAMES, f as foldText, D as DEFAULT_LANGUAGE, a as formatRange, b as LAST_VERSE_SENTINEL, c as DEFAULT_APP_SETTINGS, n as normaliseTags, r as renameInTags, d as forgetInTags, e as bookByNumber, g as DEFAULT_EDITOR_SETTINGS, h as BOOKS, i as flattenForSearch, j as SNIPPET_MARK_OPEN, k as SNIPPET_MARK_CLOSE, l as applyThemePreference, m as clientExports, o as jsxRuntimeExports, p as reactExports, A as App } from "./index-CVDZbrFH.js";
const series$1 = [{ "id": "series-letters", "name": "Summer in the Letters", "description": "Galatians, Romans, and 1 Peter, one Sunday each, then Ephesians and James to close the summer", "planned": [{ "id": "plan-eph", "title": "Seated With Him", "passage": "Ephesians 2:1-10", "inDays": 5 }, { "id": "plan-jas", "title": "Doers of the Word", "passage": "James 1:19-27", "inDays": 12 }] }, { "id": "series-beginning", "name": "In the Beginning", "description": "Genesis 1 to 22 in eight Sundays: the world made, the garden lost, a brother killed, a flood, a tower, a call, and a knife held back" }, { "id": "series-advent-luke", "name": "Advent in Luke", "description": "Zechariah, Mary, Elizabeth, and the shepherds: the first two chapters of Luke, a Sunday each, and the night itself" }, { "id": "series-i-am", "name": '요한복음의 일곱 "나는"', "description": '예수님께서 "나는 ~이니"라고 하신 일곱 말씀을 한 주일에 하나씩, 한어 예배에서' }, { "id": "series-psalms", "retired": true, "name": "Songs for the Road", "description": "Eight psalms for a summer: the ones people reach for at the bedside, in the car, and at the graveside" }, { "id": "series-comfort", "retired": true, "name": "Comfort, Comfort", "description": "Advent in Isaiah: four promises read in the dark, and the Word made flesh on Christmas Eve" }, { "id": "series-mount", "retired": true, "name": "The Sermon on the Mount", "description": 'Matthew 5 to 7 in seven Sundays: the blessings, salt and light, the six "but I say to you", the prayer, the treasure, and the two houses' }, { "id": "series-romans", "retired": true, "name": "Romans, Start to Finish", "description": "Paul's letter a Sunday at a time, from the first greeting to the last, through a winter and a spring" }];
const tags = { "groups": [{ "id": "theme", "name": "Theme", "tags": ["faithfulness", "hope", "grace", "suffering", "providence", "prayer", "forgiveness", "generosity", "justice", "rest", "fear", "love"] }, { "id": "kind", "name": "Kind", "tags": ["parables", "witness", "narrative", "psalm", "prophecy", "wisdom", "letters"] }, { "id": "language", "name": "Language", "tags": ["korean", "spanish"] }], "pinned": [] };
const illustrations$1 = [{ "id": "story-septembers", "title": "Thirty-one Septembers", "body": 'A teacher of thirty-one years: "Every September they are new, even when I am not."', "source": "A conversation after a funeral", "tags": ["faithfulness"], "daysAgo": 20 }, { "id": "story-nets", "title": "The mended nets", "body": "The fisherman who mended nets every evening, whether or not the day had caught anything.", "source": "My grandfather", "tags": ["hope", "work"], "daysAgo": 100 }, { "id": "story-seed-catalogue", "title": "The seed catalogue in January", "body": "The seed catalogue arrives when the ground is iron, and my mother orders anyway, every year, with the snow still on the garden.", "source": "My mother", "tags": ["hope", "faithfulness"], "daysAgo": 230 }, { "id": "story-sourdough", "title": "The sourdough starter", "body": `A neighbour has fed the same starter every morning for twenty-two years, bake or no bake. "It doesn't know whether today is a baking day. It only knows whether it was fed."`, "source": "Next door, over the fence", "tags": ["faithfulness"], "daysAgo": 340 }, { "id": "story-wrong-bus", "title": "The wrong bus", "body": "A six-year-old asleep on the wrong bus, and the driver who finished his route, then drove the whole of it again with one passenger, until a woman on a corner started running.", "source": "A parishioner, after church", "tags": ["grace"], "daysAgo": 570 }, { "id": "story-late-train", "title": "The fourth train", "body": "My father waited on the platform through three trains that were not hers, and stood up again for the fourth exactly as he had for the first.", "source": "My own family", "tags": ["hope"], "daysAgo": 320 }, { "id": "story-hymnal", "title": "Grandmother's hymnal", "body": 'Her hymnal had a pencilled date beside every hymn sung at a funeral she went to, forty years of them. Beside "It Is Well" there were eleven.', "source": "Her bookshelf, the week we cleared the house", "tags": ["suffering", "hope"], "daysAgo": 980 }, { "id": "story-ladder", "title": "The borrowed ladder", "body": "A ladder lent for a weekend came back on Monday with the cracked rung replaced, and no mention of it.", "source": "A neighbour", "tags": ["generosity"], "daysAgo": 330 }, { "id": "story-snow", "title": "Snow on the roofs", "body": "The morning after the snow, every roof on the street was the same colour, the big houses and the small, the mended and the ones that leaked.", "source": "A walk in January", "tags": ["grace"], "daysAgo": 990 }, { "id": "story-violin", "title": "The violin in the case", "body": "A violin left in its case for a year is not kept safe. It is out of tune, the strings gone dull, and it has to be played back into itself.", "source": "A music teacher in the congregation", "tags": ["faithfulness"], "daysAgo": 400 }, { "id": "story-dawn-prayer", "title": "할머니의 새벽 기도", "body": '외할머니는 사십 년 동안 새벽 다섯 시에 교회 문을 여셨다. 눈이 와도, 아무도 오지 않는 날에도. "누가 오느냐가 아니라 누가 계시느냐의 문제지."', "source": "외할머니", "tags": ["prayer", "faithfulness"], "daysAgo": 60 }, { "id": "story-kimjang", "title": "김장하는 날", "body": "김장은 혼자 하는 일이 아니다. 배추 백 포기를 절이고 양념을 버무리는 하루, 온 식구와 이웃이 모여야 겨울이 준비된다.", "source": "어머니 댁, 해마다 십일월", "tags": ["love"], "daysAgo": 345 }, { "id": "story-long-table", "title": "La mesa larga", "body": 'En la casa de su abuela siempre había una silla más que personas en la familia. "Por si alguien llega", decía, y alguien siempre llegaba.', "source": "Una hermana de Nueva Esperanza", "tags": ["generosity", "grace"], "daysAgo": 720 }];
const sermons$1 = /* @__PURE__ */ JSON.parse(`[{"title":"The Discipline of Returning","primaryPassage":"Galatians 6:7-10","daysAgo":null,"status":"draft","seriesId":"series-letters","tags":["faithfulness","attention"],"lengthMinutes":30,"blocks":[{"type":"point","heading":"Rivers carve canyons slowly","minutes":12,"content":"No single day of water moves the stone, and yet the canyon is there. Faithfulness is mostly the days nobody counts.","inline":[{"text":"No single day of water moves the stone, and yet the canyon is there. "},{"text":"Faithfulness is mostly the days nobody counts.","styles":{"key":true}}],"paragraphs":[{"text":"Paul is writing to people who started well and are tired. Not fallen, not rebelled: tired. The last page of the letter is for them."},{"text":"Sowing and reaping is a law before it is a promise. What is sown to the flesh comes up in the flesh, what is sown to the Spirit comes up in the Spirit, and neither comes up tomorrow."}]},{"type":"illustration","heading":"Thirty-one Septembers","content":"A teacher of thirty-one years: \\"Every September they are new, even when I am not.\\"","illustrationId":"story-septembers"},{"type":"point","heading":"The harvest comes in its season","minutes":10,"content":"Sowing is quiet work. Nobody applauds a seed.","paragraphs":[{"text":"\\"In due season\\" is Paul's phrase, and it is not a date. The farmer knows the season and still does not know the day."},{"text":"The verse does not promise that we will see the reaping. It promises that there will be one."}],"margin":"Slower here."},{"type":"scripture","ref":"Galatians 6:9","translation":"ESV","text":"And let us not grow weary of doing good, for in due season we will reap, if we do not give up."},{"type":"illustration","heading":"The seed catalogue in January","content":"My mother orders seeds with the snow still on the garden. She has never once seen the ground when she decides what it will grow.","illustrationId":"story-seed-catalogue"},{"type":"application","heading":"This week","content":"Choose one small faithfulness you had quietly dropped, and keep it every day until Sunday. Tell one person, so it is harder to stop."},{"type":"reflection","content":"What have you been tempted to stop doing because it seemed to make no difference?"},{"type":"note","content":"Slow down through the second point. Last time it was rushed."}]},{"title":"A Cord of Three Strands","occasion":"Wedding","primaryPassage":"Ecclesiastes 4:9-12","daysAgo":null,"status":"ready","tags":["love","wisdom"],"lengthMinutes":12,"blocks":[{"type":"point","heading":"Two are better than one","content":"The Preacher, who found most things vanity, did not find this one. Two people, and a third strand nobody can see."},{"type":"scripture","ref":"Ecclesiastes 4:9-10","translation":"ESV","text":"Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!"},{"type":"scripture","ref":"Ecclesiastes 4:12","translation":"ESV","text":"And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken."},{"type":"application","content":"Daniel and Jin: when one of you falls, and you will, the other one lifts. That is the whole vow in one verb."},{"type":"note","content":"Saturday at two. Rehearsal Friday at five. Jin's grandmother reads the passage in Korean first."}]},{"title":"Draw Near With Confidence","primaryPassage":"Hebrews 4:14-16","date":"2026-10-04","status":"preached","tags":["prayer","grace","letters"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"A high priest who knows","content":"Not one who is unable to sympathise. He has been where you are, and the throne he sits on is called grace."},{"type":"scripture","ref":"Hebrews 4:15-16","translation":"ESV","text":"For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin. Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need."},{"type":"application","content":"Draw near this week with the thing you have been too ashamed to bring. That is the confidence the verse means."}]},{"title":"We Love Because","primaryPassage":"1 John 4:7-21","date":"2026-09-27","status":"preached","tags":["love","fear","letters"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"The order of things","content":"We do not love our way into being loved. The verse has a because in it, and the because comes first."},{"type":"scripture","ref":"1 John 4:18-19","translation":"ESV","text":"There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love. We love because he first loved us."},{"type":"application","content":"Love someone this week who has not earned it yet, in the order the verse gives."}]},{"title":"네 하나님 여호와를 기억하라","occasion":"Chuseok","primaryPassage":"신명기 8:7-18","date":"2026-09-27","status":"preached","tags":["generosity","providence","korean"],"church":"은혜교회","minutes":30,"blocks":[{"type":"point","heading":"배부를 때가 위험한 때입니다","content":"모세는 광야의 사십 년이 아니라 가나안의 풍요를 걱정합니다. 굶주릴 때 잊는 사람은 드뭅니다. 배부를 때 잊습니다."},{"type":"scripture","ref":"신명기 8:18","translation":"개역개정","text":"네 하나님 여호와를 기억하라 그가 네게 재물 얻을 능력을 주셨음이라 이같이 하심은 네 조상들에게 맹세하신 언약을 오늘과 같이 이루려 하심이니라"},{"type":"application","content":"올해 거둔 것 가운데 하나를 골라, 그것이 어디서 왔는지 가족 앞에서 말하고 감사하십시오."}]},{"title":"When All Things Work Together","primaryPassage":"Romans 8:28-39","daysAgo":17,"status":"preached","seriesId":"series-letters","tags":["suffering","providence","letters"],"lengthMinutes":30,"preachings":[{"daysAgo":556,"church":"Hope Chapel","minutes":29},{"daysAgo":17,"church":"Grace Fellowship","minutes":32}],"blocks":[{"type":"point","heading":"God's purpose stands","minutes":12,"content":"Nothing in creation can separate us from the love of God.","paragraphs":[{"text":"Paul does not say all things are good. He says they work together, and that the working is God's.","inline":[{"text":"Paul does not say all things are good. "},{"text":"He says they work together, and that the working is God's.","styles":{"key":true}}]},{"text":"The verse is for people who are already in the hard year, not for people watching one from across the street."}]},{"type":"scripture","ref":"Romans 8:28","translation":"ESV","text":"And we know that for those who love God all things work together for good, for those who are called according to his purpose."},{"type":"illustration","heading":"The mended nets","content":"My grandfather mended his nets every evening, whether or not the day had caught anything. The mending was never about the day.","illustrationId":"story-nets"},{"type":"point","heading":"Who shall separate us","minutes":10,"content":"Paul makes a list, and the list is long on purpose: tribulation, distress, persecution, famine, nakedness, danger, sword.","paragraphs":[{"text":"He had met every one of them. This is not a hymn written in a safe room."},{"text":"Neither death nor life: the two things we are most afraid of, named first and dismissed."}]},{"type":"scripture","ref":"Romans 8:38-39","translation":"ESV","text":"For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord."},{"type":"application","heading":"Name the year","content":"Name the hard year out loud, and name where God was in it."},{"type":"reflection","content":"Where have you seen providence at work in a hard year?"},{"type":"note","content":"Second telling, at Grace. At Hope Chapel the list in verse 35 landed hardest; read it slowly."}]},{"title":"Who Is My Neighbor?","primaryPassage":"Luke 10:25-37","date":"2026-09-06","status":"preached","tags":["love","justice","parables"],"church":"Grace Fellowship","minutes":32,"blocks":[{"type":"point","heading":"The wrong question","content":"The lawyer asks who counts as a neighbour. Jesus answers who acts like one, and makes the hero a Samaritan."},{"type":"scripture","ref":"Luke 10:36-37","translation":"ESV","text":"\\"Which of these three, do you think, proved to be a neighbor to the man who fell among the robbers?\\" He said, \\"The one who showed him mercy.\\" And Jesus said to him, \\"You go, and do likewise.\\""},{"type":"illustration","heading":"The borrowed ladder","content":"A ladder lent for a weekend came back on Monday with the cracked rung replaced, and no mention of it.","illustrationId":"story-ladder"},{"type":"application","content":"Cross the road this week. Toward, not away."}]},{"title":"여호와는 나의 목자시니","primaryPassage":"시편 23편","date":"2026-08-16","status":"preached","tags":["psalm","rest","providence","korean"],"lengthMinutes":30,"church":"은혜교회","minutes":33,"blocks":[{"type":"point","heading":"목자가 아닌 사람들을 위한 시","minutes":10,"content":"이 자리에 양을 치는 분은 없습니다. 그러나 이 시편을 장례식장에서 읊어 보지 않은 분도 없습니다.","paragraphs":[{"text":"다윗은 그 일을 직접 해 본 사람으로서 이 시를 썼습니다. 지팡이는 위로가 되기 전에 먼저 연장이었습니다. 첫 줄이 시편 전체입니다. 그 뒤의 모든 구절은 '부족함이 없으리로다'가 평범한 화요일에 어떤 모습인지를 보여 줍니다.","inline":[{"text":"다윗은 그 일을 직접 해 본 사람으로서 이 시를 썼습니다. 지팡이는 위로가 되기 전에 먼저 연장이었습니다. "},{"text":"첫 줄이 시편 전체입니다.","styles":{"key":true}},{"text":" 그 뒤의 모든 구절은 '부족함이 없으리로다'가 평범한 화요일에 어떤 모습인지를 보여 줍니다."}]}]},{"type":"scripture","ref":"시편 23:1-3","translation":"개역개정","text":"여호와는 나의 목자시니 내게 부족함이 없으리로다 그가 나를 푸른 풀밭에 누이시며 쉴 만한 물 가로 인도하시는도다 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다"},{"type":"point","heading":"골짜기는 길 위에 있습니다","minutes":10,"content":"이 시편은 골짜기를 돌아가지 않습니다. 통과합니다. 그리고 목자는 여전히 거기 계시되, 전보다 더 가까이 계십니다. 시가 '그'에서 '주'로 바뀝니다.","paragraphs":[{"text":"'주께서 나와 함께 하심이라'가 경첩입니다. 그 앞에서 다윗은 하나님에 대하여 말하고, 그 뒤에서는 하나님께 말합니다."}]},{"type":"scripture","ref":"시편 23:4","translation":"개역개정","text":"내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다"},{"type":"illustration","heading":"할머니의 새벽 기도","content":"외할머니는 사십 년 동안 새벽 다섯 시에 교회 문을 여셨습니다. 눈이 와도, 아무도 오지 않는 날에도. \\"누가 오느냐가 아니라 누가 계시느냐의 문제지.\\"","illustrationId":"story-dawn-prayer"},{"type":"point","heading":"선하심과 인자하심이 따르리니","minutes":6,"content":"'따를지도 모른다'가 아닙니다. 따릅니다. 양 떼 뒤를 지키는 두 마리 개처럼, 평생토록.","paragraphs":[{"text":"선하심과 인자하심은 우리가 벌어 둔 것이 아닙니다. 뒤따라오는 은혜입니다."}]},{"type":"scripture","ref":"시편 23:6","translation":"개역개정","text":"내 평생에 선하심과 인자하심이 반드시 나를 따르리니 내가 여호와의 집에 영원히 살리로다"},{"type":"application","heading":"이번 주","content":"이번 주, 같은 시각에 하루 한 번 이 시편을 소리 내어 읽으십시오. 책 없이 외울 수 있을 때까지."},{"type":"reflection","content":"이 시편에서 진심으로 고백하기 가장 어려운 구절은 어디입니까?"},{"type":"note","content":"9시 30분 예배. 찬양대가 23편 찬송으로 마친다."}]},{"title":"Seek the Welfare of the City","primaryPassage":"Jeremiah 29:1-14","date":"2026-08-09","status":"preached","tags":["justice","witness","prophecy"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"A letter to exiles","content":"Build houses, plant gardens, pray for Babylon. The prophet tells people who want to go home to unpack."},{"type":"scripture","ref":"Jeremiah 29:7","translation":"ESV","text":"But seek the welfare of the city where I have sent you into exile, and pray to the LORD on its behalf, for in its welfare you will find your welfare."},{"type":"scripture","ref":"Jeremiah 29:11","translation":"ESV","text":"For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope."},{"type":"application","content":"Pray for this city by name, and for one thing in it that is not the church."}]},{"title":"Esfuérzate y sé valiente","primaryPassage":"Josué 1:1-9","date":"2026-07-19","status":"preached","tags":["fear","faithfulness","spanish"],"church":"Iglesia Nueva Esperanza","minutes":31,"blocks":[{"type":"point","heading":"Moisés ha muerto y el Jordán está enfrente","content":"Así empieza todo lo nuevo: el líder se fue, el río sigue ahí, y Dios repite tres veces la misma frase."},{"type":"scripture","ref":"Josué 1:9","translation":"RVR1960","text":"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas."},{"type":"application","content":"Escriban el Jordán que tienen que cruzar este año, y al lado, el versículo 9."}]},{"title":"A Living Hope","primaryPassage":"1 Peter 1:3-9","date":"2026-07-12","status":"preached","seriesId":"series-letters","tags":["hope","resurrection","letters"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Born again to a living hope","minutes":10,"content":"Through the resurrection of Jesus Christ from the dead.","paragraphs":[{"text":"Peter writes to exiles, scattered people, and the first thing he gives them is not an instruction. It is a blessing."},{"text":"A living hope is one that grows. A dead hope is a wish you have stopped checking on."}]},{"type":"scripture","ref":"1 Peter 1:3","translation":"ESV","text":"Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead,"},{"type":"point","heading":"Kept by the power of God","minutes":10,"content":"An inheritance that does not fade.","paragraphs":[{"text":"Two things are kept: the inheritance, in heaven, and you, on earth. Peter uses the word for a garrison."},{"text":"The trials are \\"for a little while\\". Peter does not pretend they are small, only that they are short."}]},{"type":"scripture","ref":"Romans 8:11","translation":"ESV","text":"If the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you."},{"type":"illustration","heading":"The mended nets","content":"The fisherman who mended nets every evening, whether or not the day had caught anything.","illustrationId":"story-nets"},{"type":"application","heading":"This week","content":"Write down the one thing you are waiting on, and beside it the one thing you already have that cannot be taken."},{"type":"reflection","content":"What is the hope you have stopped checking on?"}]},{"title":"Trust With All Your Heart","primaryPassage":"Proverbs 3:1-12","date":"2026-06-21","status":"preached","tags":["wisdom","providence"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"Do not lean","content":"The proverb assumes you have understanding. It only tells you not to put your weight on it."},{"type":"scripture","ref":"Proverbs 3:5-6","translation":"ESV","text":"Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."},{"type":"application","content":"One decision this week made by acknowledging him first and your own understanding second."}]},{"title":"The Sower Went Out","primaryPassage":"Mark 4:1-20","date":"2026-06-07","status":"preached","tags":["parables","faithfulness"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"Reckless with seed","content":"The sower does not test the soil first. He throws, and most of it is lost, and the harvest is still a hundredfold."},{"type":"scripture","ref":"Mark 4:8","translation":"ESV","text":"And other seeds fell into good soil and produced grain, growing up and increasing and yielding thirtyfold and sixtyfold and a hundredfold."},{"type":"application","content":"Sow somewhere you have decided is bad soil."}]},{"title":"The Shepherd Who Goes Looking","occasion":"Funeral","primaryPassage":"Luke 15:1-7","date":"2026-05-28","status":"preached","tags":["grace","parables"],"lengthMinutes":12,"church":"Grace Fellowship","minutes":14,"blocks":[{"type":"point","heading":"Ninety-nine are not enough","minutes":6,"content":"The shepherd leaves what is safe for what is lost.","paragraphs":[{"text":"Jesus told this to people who were angry that he ate with the wrong crowd. The parable is his answer: this is what God is like."},{"text":"He does not send someone. He goes."}]},{"type":"scripture","ref":"Luke 15:4","translation":"ESV","text":"What man of you, having a hundred sheep, if he has lost one of them, does not leave the ninety-nine in the open country, and go after the one that is lost, until he finds it?"},{"type":"illustration","heading":"The wrong bus","content":"A boy of six fell asleep on the wrong bus. The driver finished his route, then drove the whole of it again with one passenger, until a woman on a corner started running.","illustrationId":"story-wrong-bus"},{"type":"point","heading":"He carries it home rejoicing","minutes":6,"content":"Not scolding. Not limping it back. On his shoulders, rejoicing.","paragraphs":[{"text":"For a family saying goodbye, this is the sentence to keep: the finding is a joy to God, not a chore."},{"text":"She asked for this parable herself, and said she had been the sheep more than once."}]},{"type":"scripture","ref":"Luke 15:5-6","translation":"ESV","text":"And when he has found it, he lays it on his shoulders, rejoicing. And when he comes home, he calls together his friends and his neighbors, saying to them, \\"Rejoice with me, for I have found my sheep that was lost.\\""},{"type":"application","content":"Who has drifted from this room that nobody has gone after?"},{"type":"note","content":"Family in the front two rows. Keep it to twelve minutes."}]},{"title":"Can These Bones Live","occasion":"Pentecost","primaryPassage":"Ezekiel 37:1-14","date":"2026-05-24","status":"preached","tags":["hope","prophecy"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"O Lord God, you know","content":"The prophet does not say yes and does not say no. He gives the only honest answer and is told to preach anyway."},{"type":"scripture","ref":"Ezekiel 37:4-5","translation":"ESV","text":"Then he said to me, \\"Prophesy over these bones, and say to them, O dry bones, hear the word of the LORD. Thus says the Lord GOD to these bones: Behold, I will cause breath to enter you, and you shall live.\\""},{"type":"application","content":"Preach to the dry bones in your life this week: the relationship, the habit, the church you have given up on."}]},{"title":"Not Consumed","primaryPassage":"Exodus 3:1-15","date":"2026-05-17","status":"preached","tags":["fear","providence","narrative"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"A bush that burns and is not used up","content":"Moses turns aside to see why. Everything that follows comes from a man willing to stop and look."},{"type":"scripture","ref":"Exodus 3:14","translation":"ESV","text":"God said to Moses, \\"I AM WHO I AM.\\" And he said, \\"Say this to the people of Israel: 'I AM has sent me to you.'\\""},{"type":"application","content":"Turn aside once this week. Stop for the thing that is burning and not consumed."}]},{"title":"Salt That Keeps Its Taste","primaryPassage":"Matthew 5:13-16","date":"2026-04-19","status":"preached","tags":["witness","faithfulness"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Salt is for the food, not the shaker","minutes":12,"content":"A church that stays in the building has not yet been used."},{"type":"scripture","ref":"Matthew 5:13","translation":"ESV","text":"You are the salt of the earth, but if salt has lost its taste, how shall its saltiness be restored? It is no longer good for anything except to be thrown out and trampled under people's feet."},{"type":"illustration","heading":"The mended nets","content":"The fisherman who mended nets every evening, whether or not the day had caught anything.","illustrationId":"story-nets"},{"type":"point","heading":"Light is meant to be seen","minutes":10,"content":"Not to be admired: to help people find the door."},{"type":"application","content":"Be salt somewhere this week that is not this building."}]},{"title":"She Turned Around","occasion":"Easter","primaryPassage":"John 20:1-18","date":"2026-04-05","status":"preached","tags":["hope","resurrection","narrative"],"lengthMinutes":30,"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"While it was still dark","minutes":8,"content":"The resurrection is announced to a woman who came to tend a body. She did not come for good news. She came with spices.","paragraphs":[{"text":"John puts the time in the first sentence. Easter begins before anyone can see."},{"text":"The stone was moved for the witnesses, not for Jesus."}]},{"type":"scripture","ref":"John 20:1","translation":"ESV","text":"Now on the first day of the week Mary Magdalene came to the tomb early, while it was still dark, and saw that the stone had been taken away from the tomb."},{"type":"point","heading":"She did not recognise him","minutes":10,"content":"Grief has its own eyesight. It sees what it expects. He does not argue her out of it. He says her name.","inline":[{"text":"Grief has its own eyesight. It sees what it expects. "},{"text":"He does not argue her out of it. He says her name.","styles":{"key":true}}],"paragraphs":[{"text":"The first Easter sermon was preached to someone looking right at Jesus and weeping, because she thought he was the gardener."}]},{"type":"scripture","ref":"John 20:15-16","translation":"ESV","text":"Jesus said to her, \\"Woman, why are you weeping? Whom are you seeking?\\" Supposing him to be the gardener, she said to him, \\"Sir, if you have carried him away, tell me where you have laid him, and I will take him away.\\" Jesus said to her, \\"Mary.\\" She turned and said to him in Aramaic, \\"Rabboni!\\" (which means Teacher)."},{"type":"illustration","heading":"The fourth train","content":"My father stood up for the fourth train exactly as he had for the first. Mary stood at the tomb the same way.","illustrationId":"story-late-train"},{"type":"point","heading":"Go and tell","minutes":8,"content":"The first apostle to the apostles is sent, not seated. \\"Do not cling to me.\\" The resurrection is not a thing to hold. It is a thing to carry."},{"type":"scripture","ref":"John 20:17-18","translation":"ESV","text":"Jesus said to her, \\"Do not cling to me, for I have not yet ascended to the Father; but go to my brothers and say to them, 'I am ascending to my Father and your Father, to my God and your God.'\\" Mary Magdalene went and announced to the disciples, \\"I have seen the Lord\\"—and that he had said these things to her."},{"type":"application","heading":"Easter Monday","content":"Tell one person what you saw this morning, in your own words, before the week makes it a memory."},{"type":"reflection","content":"Where in your life are you looking straight at God and seeing a gardener?"},{"type":"note","content":"The Korean service at 9:30 preaches the same passage. Keep the two sermons different: this one is Mary's, that one is the empty tomb's."}]},{"title":"무덤이 비었습니다","occasion":"Easter","primaryPassage":"요한복음 20:1-18","date":"2026-04-05","status":"preached","tags":["hope","resurrection","korean"],"church":"은혜교회","minutes":32,"blocks":[{"type":"point","heading":"아직 어두울 때에","content":"부활의 소식은 시신을 돌보러 온 여인에게 먼저 전해집니다. 마리아는 좋은 소식을 들으러 온 것이 아닙니다. 향품을 들고 왔습니다."},{"type":"scripture","ref":"요한복음 20:1","translation":"개역개정","text":"안식 후 첫날 일찍이 아직 어두울 때에 막달라 마리아가 무덤에 와서 돌이 무덤에서 옮겨진 것을 보고"},{"type":"point","heading":"빈 무덤은 증거이지 설명이 아닙니다","content":"베드로와 요한은 세마포를 보고 돌아갑니다. 마리아는 남아서 웁니다. 부활을 처음 본 사람은 떠나지 못한 사람이었습니다. 그 은혜는 머문 사람에게 먼저 왔습니다."},{"type":"application","content":"오늘 오후, 한 사람에게 당신의 말로 \\"내가 주를 보았다\\"고 전하십시오."}]},{"title":"It Is Finished","occasion":"Good Friday","primaryPassage":"John 19:16-30","date":"2026-04-03","status":"preached","tags":["suffering","grace"],"church":"Grace Fellowship","minutes":20,"blocks":[{"type":"point","heading":"One word in Greek","content":"Tetelestai: paid, completed, done. It was written on receipts. It is said from a cross."},{"type":"scripture","ref":"John 19:30","translation":"ESV","text":"When Jesus had received the sour wine, he said, \\"It is finished,\\" and he bowed his head and gave up his spirit."},{"type":"note","content":"End in the dark. The congregation leaves in silence and comes back on Sunday."}]},{"title":"Jesus Wept","occasion":"Lent","primaryPassage":"John 11:1-44","date":"2026-03-22","status":"preached","tags":["suffering","hope","narrative"],"church":"Grace Fellowship","minutes":32,"blocks":[{"type":"point","heading":"He stayed two days longer","content":"Jesus loved them, John says, and so he waited. The sentence does not make sense until the tomb."},{"type":"scripture","ref":"John 11:25-26","translation":"ESV","text":"Jesus said to her, \\"I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?\\""},{"type":"scripture","ref":"John 11:35","translation":"ESV","text":"Jesus wept."},{"type":"point","heading":"The shortest verse","content":"He is about to raise Lazarus and he weeps anyway. The resurrection does not cancel the grief. It keeps it company."},{"type":"application","content":"Sit with someone in the two days, before anything is fixed."}]},{"title":"El padre que corre","occasion":"Lent","primaryPassage":"Lucas 15:11-32","date":"2026-03-15","status":"preached","tags":["grace","forgiveness","parables","spanish"],"church":"Iglesia Nueva Esperanza","minutes":32,"blocks":[{"type":"point","heading":"Lo vio cuando aún estaba lejos","content":"Lo cual quiere decir que miraba. Todos los días, ese camino.","paragraphs":[{"text":"La gracia no espera en casa a que el hijo toque la puerta. Sale corriendo."}]},{"type":"scripture","ref":"Lucas 15:20","translation":"RVR1960","text":"Y levantándose, vino a su padre. Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó."},{"type":"illustration","heading":"La mesa larga","content":"En la casa de su abuela, me contó una hermana, siempre había una silla más que personas. \\"Por si alguien llega.\\" Y alguien siempre llegaba.","illustrationId":"story-long-table"},{"type":"reflection","content":"¿Cuál de los dos hermanos es usted esta Cuaresma, y a cuál sale el padre a buscar?"}]},{"title":"Rend Your Hearts","occasion":"Lent","primaryPassage":"Joel 2:12-17","date":"2026-03-08","status":"preached","tags":["forgiveness","prophecy"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"Not your garments","content":"Tearing clothes was the public sign of grief. Joel asks for the private one, and says who it is we return to: gracious, merciful, slow to anger."},{"type":"scripture","ref":"Joel 2:13","translation":"ESV","text":"and rend your hearts and not your garments. Return to the LORD your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love; and he relents over disaster."},{"type":"application","content":"One private repentance this Lent, with no one watching, for the thing only you know about."}]},{"title":"The Lord Will Provide","primaryPassage":"Genesis 22:1-19","date":"2026-03-01","status":"preached","seriesId":"series-beginning","tags":["providence","fear","faithfulness","narrative"],"church":"Grace Fellowship","minutes":33,"blocks":[{"type":"point","heading":"They went both of them together","content":"Twice the chapter says it. A father and a son walking up a hill with wood, and the answer to the son's question not yet in sight."},{"type":"scripture","ref":"Genesis 22:8","translation":"ESV","text":"Abraham said, \\"God will provide for himself the lamb for a burnt offering, my son.\\" So they went both of them together."},{"type":"application","content":"Climb the hill you have been given, with the wood. The ram is not visible from the bottom."}]},{"title":"Go From Your Country","primaryPassage":"Genesis 12:1-9","date":"2026-02-22","status":"preached","seriesId":"series-beginning","tags":["faithfulness","hope","narrative"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"A promise and a direction, and no map","content":"Abram is told to leave and told that he will be blessed. He is not told where he is going."},{"type":"scripture","ref":"Genesis 12:1-2","translation":"ESV","text":"Now the LORD said to Abram, \\"Go from your country and your kindred and your father's house to the land that I will show you. And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing.\\""},{"type":"illustration","heading":"The seed catalogue in January","content":"The seed catalogue arrives when the ground is iron, and my mother orders anyway, every year, with the snow still on the garden.","illustrationId":"story-seed-catalogue"},{"type":"application","content":"What is the step you can take without the map? Take it this week."}]},{"title":"A Name for Ourselves","primaryPassage":"Genesis 11:1-9","date":"2026-02-15","status":"preached","seriesId":"series-beginning","tags":["wisdom","fear","narrative"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"A tower against being scattered","content":"They build to be famous and to stay together. God gives them the thing they feared, and it turns out to be the mission."},{"type":"scripture","ref":"Genesis 11:4","translation":"ESV","text":"Then they said, \\"Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves, lest we be dispersed over the face of the whole earth.\\""},{"type":"application","content":"Name one thing you are building for a name. Ask what it would look like built for a blessing."}]},{"title":"강하고 담대하라","occasion":"Seollal","primaryPassage":"여호수아 1:1-9","date":"2026-02-15","status":"preached","tags":["fear","faithfulness","korean"],"church":"은혜교회","minutes":31,"blocks":[{"type":"point","heading":"모세는 죽었고 요단은 앞에 있습니다","content":"새해는 늘 이렇게 시작됩니다. 지도자는 떠났고 강은 건너야 하고, 하나님은 세 번 같은 말씀을 하십니다."},{"type":"scripture","ref":"여호수아 1:9","translation":"개역개정","text":"내가 네게 명령한 것이 아니냐 강하고 담대하라 두려워하지 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라 하시니라"},{"type":"application","content":"올해 건너야 할 요단이 무엇인지 설날 아침에 적으십시오. 그리고 그 옆에 9절을 쓰십시오."}]},{"title":"The Bow in the Cloud","primaryPassage":"Genesis 9:8-17","date":"2026-02-08","status":"preached","seriesId":"series-beginning","tags":["providence","hope","narrative"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"A weapon hung up","content":"God sets his war bow in the sky, pointing away from the earth. The rainbow is a promise of never again, made before anyone deserved it."},{"type":"scripture","ref":"Genesis 9:13","translation":"ESV","text":"I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth."},{"type":"application","content":"Next time you see one, say the promise out loud. The sign was for us to read."}]},{"title":"Am I My Brother's Keeper?","primaryPassage":"Genesis 4:1-16","date":"2026-02-01","status":"preached","seriesId":"series-beginning","tags":["justice","forgiveness","narrative"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"The second question","content":"Cain answers God's question with one of his own, and the whole history of violence is in it."},{"type":"scripture","ref":"Genesis 4:9","translation":"ESV","text":"Then the LORD said to Cain, \\"Where is Abel your brother?\\" He said, \\"I do not know; am I my brother's keeper?\\""},{"type":"application","content":"Yes. Find out this week how your brother is doing, the one you have been not keeping."}]},{"title":"Where Are You?","primaryPassage":"Genesis 3:1-24","date":"2026-01-25","status":"preached","seriesId":"series-beginning","tags":["grace","forgiveness","narrative"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"The first question in the Bible","content":"God asks a question he knows the answer to. He is not looking for information. He is looking for Adam."},{"type":"scripture","ref":"Genesis 3:9","translation":"ESV","text":"But the LORD God called to the man and said to him, \\"Where are you?\\""},{"type":"application","content":"Answer the question. Where are you, honestly, this morning?"}]},{"title":"Not Good to Be Alone","primaryPassage":"Genesis 2:4-25","date":"2026-01-18","status":"preached","seriesId":"series-beginning","tags":["love","narrative"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"The first \\"not good\\"","content":"Everything in chapter one is good. The first thing God calls not good is a man by himself."},{"type":"scripture","ref":"Genesis 2:18","translation":"ESV","text":"Then the LORD God said, \\"It is not good that the man should be alone; I will make him a helper fit for him.\\""},{"type":"application","content":"Who in this church is alone this week? That is the one \\"not good\\" you can do something about."}]},{"title":"And It Was Good","primaryPassage":"Genesis 1:1-2:3","date":"2026-01-11","status":"preached","seriesId":"series-beginning","tags":["providence","narrative","creation"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"God saw","content":"Seven times the chapter stops to say that God looked at what he had made and approved of it. Before anything is commanded, something is enjoyed."},{"type":"scripture","ref":"Genesis 1:1","translation":"ESV","text":"In the beginning, God created the heavens and the earth."},{"type":"scripture","ref":"Genesis 1:31","translation":"ESV","text":"And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day."},{"type":"application","content":"Stop once a day this week to look at something made, and say that it is good."}]},{"title":"Straining Forward","occasion":"New Year","primaryPassage":"Philippians 3:12-14","date":"2026-01-04","status":"preached","tags":["hope","letters"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"Not that I have already obtained","content":"Paul, late in life, in prison, says he has not arrived. It is the most freeing sentence to start a year with."},{"type":"scripture","ref":"Philippians 3:13-14","translation":"ESV","text":"Brothers, I do not consider that I have made it my own. But one thing I do: forgetting what lies behind and straining forward to what lies ahead, I press on toward the goal for the prize of the upward call of God in Christ Jesus."},{"type":"application","content":"Forget one thing on purpose this year. Write it down, then do not read it again."}]},{"title":"Good News of Great Joy","occasion":"Christmas","primaryPassage":"Luke 2:1-20","date":"2025-12-24","status":"preached","seriesId":"series-advent-luke","tags":["hope","narrative"],"church":"Grace Fellowship","minutes":17,"blocks":[{"type":"point","heading":"To shepherds first","content":"The announcement goes to men on the night shift, not to the palace. It always has."},{"type":"scripture","ref":"Luke 2:10-11","translation":"ESV","text":"And the angel said to them, \\"Fear not, for behold, I bring you good news of great joy that will be for all the people. For unto you is born this day in the city of David a Savior, who is Christ the Lord.\\""},{"type":"note","content":"Candles at the end. Keep the sermon shorter than the carols."}]},{"title":"The Sunrise From on High","occasion":"Advent","primaryPassage":"Luke 1:57-80","date":"2025-12-21","status":"preached","seriesId":"series-advent-luke","tags":["hope","narrative"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"The first words of a man struck dumb","content":"Zechariah has been silent for nine months. When his tongue is loosed, the first thing he does is bless."},{"type":"scripture","ref":"Luke 1:78-79","translation":"ESV","text":"because of the tender mercy of our God, whereby the sunrise shall visit us from on high to give light to those who sit in darkness and in the shadow of death, to guide our feet into the way of peace."},{"type":"application","content":"In the darkest week of the year, go outside at dawn once and watch the sunrise do what the verse says."}]},{"title":"My Soul Magnifies","occasion":"Advent","primaryPassage":"Luke 1:39-56","date":"2025-12-14","status":"preached","seriesId":"series-advent-luke","tags":["justice","hope","narrative"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"A song that turns the world upside down","content":"Mary's song is not sweet. It brings down the mighty and sends the rich away empty, and she sings it in a kitchen."},{"type":"scripture","ref":"Luke 1:46-48","translation":"ESV","text":"And Mary said, \\"My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked on the humble estate of his servant. For behold, from now on all generations will call me blessed;"},{"type":"scripture","ref":"Luke 1:52","translation":"ESV","text":"he has brought down the mighty from their thrones and exalted those of humble estate;"},{"type":"application","content":"Sing the Magnificat with the proud and the hungry you know in mind. Then decide which you are."}]},{"title":"Let It Be","occasion":"Advent","primaryPassage":"Luke 1:26-38","date":"2025-12-07","status":"preached","seriesId":"series-advent-luke","tags":["faithfulness","fear","narrative"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"A girl says yes","content":"The angel does not ask her permission, but Luke records her consent anyway. The incarnation waits on a teenager's word."},{"type":"scripture","ref":"Luke 1:37-38","translation":"ESV","text":"For nothing will be impossible with God.\\" And Mary said, \\"Behold, I am the servant of the Lord; let it be to me according to your word.\\" And the angel departed from her."},{"type":"application","content":"Say \\"let it be\\" to the thing you have been negotiating with God about."}]},{"title":"Your Prayer Has Been Heard","occasion":"Advent","primaryPassage":"Luke 1:5-25","date":"2025-11-30","status":"preached","seriesId":"series-advent-luke","tags":["prayer","hope","narrative"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"An old priest in the holy place","content":"Zechariah had prayed for a son for forty years and stopped expecting one. The angel answers a prayer he had filed away."},{"type":"scripture","ref":"Luke 1:13","translation":"ESV","text":"But the angel said to him, \\"Do not be afraid, Zechariah, for your prayer has been heard, and your wife Elizabeth will bear you a son, and you shall call his name John.\\""},{"type":"illustration","heading":"The fourth train","content":"My father waited on the platform through three trains that were not hers, and stood up again for the fourth exactly as he had for the first.","illustrationId":"story-late-train"},{"type":"application","content":"Pray again the prayer you have quietly stopped praying."}]},{"title":"Enter His Gates","occasion":"Thanksgiving","primaryPassage":"Psalm 100","date":"2025-11-23","status":"preached","tags":["generosity","hope","psalm"],"church":"Grace Fellowship","minutes":27,"blocks":[{"type":"point","heading":"Thanks is the way in","content":"The psalm does not say be thankful once you are inside. It says the gate itself is thanksgiving."},{"type":"scripture","ref":"Psalm 100:4-5","translation":"ESV","text":"Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name! For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations."},{"type":"illustration","heading":"The borrowed ladder","content":"A ladder lent for a weekend came back on Monday with the cracked rung replaced, and no mention of it.","illustrationId":"story-ladder"},{"type":"application","content":"Return something this week better than you borrowed it."}]},{"title":"Por nada estén afanosos","primaryPassage":"Filipenses 4:4-9","date":"2025-11-16","status":"preached","tags":["fear","prayer","rest","spanish"],"church":"Iglesia Nueva Esperanza","minutes":30,"blocks":[{"type":"point","heading":"Una carta alegre desde la cárcel","content":"Pablo escribe \\"regocijaos\\" encadenado. La paz que describe no viene de las circunstancias, porque las suyas eran malas."},{"type":"scripture","ref":"Filipenses 4:6-7","translation":"RVR1960","text":"Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús."},{"type":"application","content":"Esta semana, cada afán convertido en una petición con gracias. Escríbanlas, y vuelvan a leerlas el domingo."}]},{"title":"Grieve, but With Hope","occasion":"Funeral","primaryPassage":"1 Thessalonians 4:13-18","date":"2025-11-14","status":"preached","tags":["hope","suffering","letters"],"church":"Grace Fellowship","minutes":13,"blocks":[{"type":"point","heading":"Not as others do","content":"Paul does not tell the Thessalonians not to grieve. He tells them how: with the one thing the others do not have."},{"type":"scripture","ref":"1 Thessalonians 4:13-14","translation":"ESV","text":"But we do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope. For since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have fallen asleep."},{"type":"application","content":"Grieve fully. Then, when you can, say the second half of verse 14 aloud at the graveside."}]},{"title":"The Race Set Before Us","primaryPassage":"Hebrews 12:1-3","date":"2025-11-09","status":"preached","tags":["faithfulness","suffering","letters"],"lengthMinutes":30,"church":"Grace Fellowship","minutes":30,"preachings":[{"date":"2025-11-09","church":"Grace Fellowship","minutes":32},{"date":"2026-06-14","church":"Hope Chapel","minutes":29}],"blocks":[{"type":"point","heading":"Surrounded by witnesses","minutes":10,"content":"The chapter before this is a list of the dead, and the writer says they are a crowd in the stands.","paragraphs":[{"text":"They are not judges. They are people who ran this track and finished."},{"text":"Nobody runs alone in this letter."}]},{"type":"scripture","ref":"Hebrews 12:1-2","translation":"ESV","text":"Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God."},{"type":"point","heading":"Lay aside every weight","minutes":10,"content":"Weight is not sin. Weight is the good thing you cannot run with.","inline":[{"text":"Weight is not sin. "},{"text":"Weight is the good thing you cannot run with.","styles":{"key":true}}],"paragraphs":[{"text":"A runner does not carry a suitcase because there is nothing wrong in it."},{"text":"Endurance is the word for a race you cannot see the end of."}]},{"type":"illustration","heading":"The sourdough starter","content":"A neighbour has fed the same starter every morning for twenty-two years. \\"It doesn't know whether today is a baking day. It only knows whether it was fed.\\"","illustrationId":"story-sourdough"},{"type":"point","heading":"Looking to Jesus","minutes":8,"content":"The runner's eyes are the whole technique. Where you look is where you go."},{"type":"scripture","ref":"Hebrews 12:3","translation":"ESV","text":"Consider him who endured from sinners such hostility against himself, so that you may not grow weary or fainthearted."},{"type":"application","heading":"This week","content":"Name one weight. Not a sin: a good thing you are carrying that you were not given to carry. Put it down for a month."},{"type":"reflection","content":"Who is in your cloud of witnesses, and what did they lay aside?"}]},{"title":"참 포도나무","primaryPassage":"요한복음 15:1-11","date":"2025-11-02","status":"preached","seriesId":"series-i-am","tags":["faithfulness","love","korean"],"lengthMinutes":35,"church":"은혜교회","minutes":36,"blocks":[{"type":"point","heading":"가지는 열매를 만들지 않습니다","minutes":12,"content":"가지는 열매를 맺습니다. 만들지 않습니다. 열매는 나무에서 올라오고, 가지는 붙어 있는 것이 전부입니다.","paragraphs":[{"text":"예수님은 이 말씀을 다락방에서, 십자가를 몇 시간 앞두고 하셨습니다. 떠나시기 전 마지막 비유입니다."},{"text":"'거하라'는 말씀이 이 단락에 일곱 번 나옵니다. 하라는 것이 아니라 있으라는 것입니다.","inline":[{"text":"'거하라'는 말씀이 이 단락에 일곱 번 나옵니다. "},{"text":"하라는 것이 아니라 있으라는 것입니다.","styles":{"key":true}}]}]},{"type":"scripture","ref":"요한복음 15:5","translation":"개역개정","text":"나는 포도나무요 너희는 가지라 그가 내 안에, 내가 그 안에 거하면 사람이 열매를 많이 맺나니 나를 떠나서는 너희가 아무 것도 할 수 없음이라"},{"type":"illustration","heading":"김장하는 날","content":"김장은 혼자 하는 일이 아닙니다. 배추 백 포기를 절이는 하루, 온 식구와 이웃이 모여야 겨울이 준비됩니다. 교회도 그렇습니다.","illustrationId":"story-kimjang"},{"type":"point","heading":"농부는 가지를 깨끗하게 하십니다","minutes":10,"content":"열매 맺는 가지를 깎으신다는 말씀이 가장 어렵습니다. 잘 되는 가지를 자르십니다. 더 맺게 하시려고. 깎으시는 것도 은혜입니다."},{"type":"scripture","ref":"요한복음 15:1-2","translation":"개역개정","text":"나는 참포도나무요 내 아버지는 농부라 무릇 내게 붙어 있어 열매를 맺지 아니하는 가지는 아버지께서 그것을 제거해 버리시고 무릇 열매를 맺는 가지는 더 열매를 맺게 하려 하여 그것을 깨끗하게 하시느니라"},{"type":"application","heading":"이번 주","content":"이번 주에는 더 하려고 하지 마십시오. 하루에 십 분, 말씀 앞에 가만히 붙어 있으십시오."},{"type":"reflection","content":"지난 한 해, 하나님께서 당신의 삶에서 깎아 내신 것은 무엇이었습니까?"},{"type":"note","content":"일곱 번째이자 마지막 설교. 지난 여섯 주를 한 문장씩 되짚고 시작한다."}]},{"title":"Crucified With Christ","primaryPassage":"Galatians 2:15-21","date":"2025-10-26","status":"preached","tags":["grace","letters"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"No longer I","content":"Paul's shortest autobiography: he died, and the life he lives now is on loan."},{"type":"scripture","ref":"Galatians 2:20","translation":"ESV","text":"I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me."},{"type":"application","content":"Say verse 20 in the first person each morning until it stops sounding like someone else's."}]},{"title":"길이요 진리요 생명","primaryPassage":"요한복음 14:1-14","date":"2025-10-26","status":"preached","seriesId":"series-i-am","tags":["fear","hope","korean"],"church":"은혜교회","minutes":33,"blocks":[{"type":"point","heading":"너희는 마음에 근심하지 말라","content":"떠나시는 밤에 하신 말씀입니다. 길을 모른다는 도마에게 예수님은 지도를 주지 않으시고 자신을 주십니다."},{"type":"scripture","ref":"요한복음 14:6","translation":"개역개정","text":"예수께서 이르시되 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라"},{"type":"application","content":"길을 모르겠다고 솔직하게 기도하십시오. 도마의 질문이 이 말씀을 끌어냈습니다."}]},{"title":"부활이요 생명","primaryPassage":"요한복음 11:17-44","date":"2025-10-19","status":"preached","seriesId":"series-i-am","tags":["hope","suffering","korean"],"church":"은혜교회","minutes":35,"blocks":[{"type":"point","heading":"주께서 여기 계셨더라면","content":"마르다와 마리아는 같은 말로 예수님을 맞습니다. 원망이자 고백입니다. 예수님은 그 말을 꾸짖지 않으시고 우십니다."},{"type":"scripture","ref":"요한복음 11:25-26","translation":"개역개정","text":"예수께서 이르시되 나는 부활이요 생명이니 나를 믿는 자는 죽어도 살겠고 무릇 살아서 나를 믿는 자는 영원히 죽지 아니하리니 이것을 네가 믿느냐"},{"type":"application","content":"\\"이것을 네가 믿느냐\\"에 이번 주 당신의 이름으로 대답하십시오."}]},{"title":"선한 목자","primaryPassage":"요한복음 10:11-18","date":"2025-10-12","status":"preached","seriesId":"series-i-am","tags":["love","providence","korean"],"church":"은혜교회","minutes":34,"blocks":[{"type":"point","heading":"삯꾼은 이리를 보면 달아납니다","content":"삯꾼과 목자의 차이는 능력이 아니라 소유입니다. 양이 자기 것인 사람만 남습니다."},{"type":"scripture","ref":"요한복음 10:11","translation":"개역개정","text":"나는 선한 목자라 선한 목자는 양들을 위하여 목숨을 버리거니와"},{"type":"application","content":"내가 삯꾼처럼 대하고 있는 사람이 누구인지 생각해 보십시오. 그 사람이 내 양입니다."}]},{"title":"아침마다 새로우니","occasion":"Chuseok","primaryPassage":"예레미야애가 3:22-26","date":"2025-10-05","status":"preached","tags":["hope","faithfulness","korean"],"church":"은혜교회","minutes":30,"blocks":[{"type":"point","heading":"폐허에서 쓴 시","content":"이 시는 무너진 예루살렘에서 쓰였습니다. \\"아침마다 새로우니\\"라고 말하는 사람은 자기 도시가 불타는 것을 본 사람입니다."},{"type":"scripture","ref":"예레미야애가 3:22-23","translation":"개역개정","text":"여호와의 인자와 긍휼이 무궁하시므로 우리가 진멸되지 아니함이니이다 이것들이 아침마다 새로우니 주의 성실하심이 크시도소이다"},{"type":"application","content":"추석 상 앞에서 올해 받은 새 아침을 세어 보십시오. 가족에게 하나씩 말해 보십시오."}]},{"title":"양의 문","primaryPassage":"요한복음 10:1-10","date":"2025-09-28","status":"preached","seriesId":"series-i-am","tags":["grace","rest","korean"],"church":"은혜교회","minutes":32,"blocks":[{"type":"point","heading":"문으로 들어가면 꼴을 얻습니다","content":"목자는 밤에 우리 입구에 몸을 누입니다. 그 몸이 곧 문입니다. 예수님은 이 비유를 두 번 설명하셔야 했습니다."},{"type":"scripture","ref":"요한복음 10:9","translation":"개역개정","text":"내가 문이니 누구든지 나로 말미암아 들어가면 구원을 받고 또는 들어가며 나오며 꼴을 얻으리라"},{"type":"application","content":"들어가며 나오며: 예배당과 직장 사이에 문이 하나뿐임을 월요일 아침에 기억하십시오."}]},{"title":"세상의 빛","primaryPassage":"요한복음 8:12-20","date":"2025-09-21","status":"preached","seriesId":"series-i-am","tags":["hope","korean"],"church":"은혜교회","minutes":33,"blocks":[{"type":"point","heading":"어둠에 다니지 아니하고","content":"초막절 마지막 날, 성전 뜰의 큰 등불이 꺼진 자리에서 예수님은 말씀하십니다. 등불은 꺼졌지만 빛은 꺼지지 않았습니다."},{"type":"scripture","ref":"요한복음 8:12","translation":"개역개정","text":"예수께서 또 말씀하여 이르시되 나는 세상의 빛이니 나를 따르는 자는 어둠에 다니지 아니하고 생명의 빛을 얻으리라"},{"type":"application","content":"어둠 속을 걷고 있는 한 사람을 찾아 이번 주에 함께 걸으십시오. 빛은 따라가는 사람에게 주어집니다."}]},{"title":"생명의 떡","primaryPassage":"요한복음 6:25-40","date":"2025-09-14","status":"preached","seriesId":"series-i-am","tags":["grace","korean"],"church":"은혜교회","minutes":35,"blocks":[{"type":"point","heading":"배부른 사람들이 떡을 찾아왔습니다","content":"어제 오천 명을 먹이신 분을 사람들이 다시 찾습니다. 예수님은 그들이 표적을 보았기 때문이 아니라 배가 불렀기 때문에 왔다고 하십니다.","paragraphs":[{"text":"떡은 사고파는 것이지만 생명의 떡은 은혜로 주어집니다. 값을 치를 수 있는 사람이 없기 때문입니다."}]},{"type":"scripture","ref":"요한복음 6:35","translation":"개역개정","text":"예수께서 이르시되 나는 생명의 떡이니 내게 오는 자는 결코 주리지 아니할 터이요 나를 믿는 자는 영원히 목마르지 아니하리라"},{"type":"application","content":"이번 주, 무엇으로 배를 채우고 있는지 하루 한 번 적어 보십시오. 그리고 그 자리에서 이 말씀을 읽으십시오."}]},{"title":"Faith That Works","primaryPassage":"James 2:14-26","date":"2025-09-07","status":"preached","tags":["faithfulness","generosity","letters"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Show me","content":"James is not arguing with Paul. He is arguing with people who learned Paul's words and stopped there."},{"type":"scripture","ref":"James 2:17","translation":"ESV","text":"So also faith by itself, if it does not have works, is dead."},{"type":"illustration","heading":"The violin in the case","content":"A violin left in its case for a year is not kept safe. It is out of tune, the strings gone dull, and it has to be played back into itself.","illustrationId":"story-violin"},{"type":"application","content":"One work this week that your faith would be dead without."}]},{"title":"But If Not","primaryPassage":"Daniel 3:1-30","date":"2025-08-24","status":"preached","tags":["faithfulness","fear","narrative"],"church":"Grace Fellowship","minutes":32,"blocks":[{"type":"point","heading":"Three words that make faith honest","content":"They know God can save them. They do not know that he will. \\"But if not\\" is where faith stops being a bargain."},{"type":"scripture","ref":"Daniel 3:17-18","translation":"ESV","text":"If this be so, our God whom we serve is able to deliver us from the burning fiery furnace, and he will deliver us out of your hand, O king. But if not, be it known to you, O king, that we will not serve your gods or worship the golden image that you have set up."},{"type":"application","content":"Finish the sentence for yourself: \\"God is able, but if not, I will still…\\""}]},{"title":"What Prevents Me?","occasion":"Baptism","primaryPassage":"Acts 8:26-40","date":"2025-08-17","status":"preached","tags":["witness","grace","narrative"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"A desert road and a chariot","content":"Philip is sent from a revival to an empty road, and finds one man reading Isaiah without a guide."},{"type":"scripture","ref":"Acts 8:36","translation":"ESV","text":"And as they were going along the road they came to some water, and the eunuch said, \\"See, here is water! What prevents me from being baptized?\\""},{"type":"application","content":"Who is reading without a guide near you? Sit in the chariot."}]},{"title":"Search Me","primaryPassage":"Psalm 139","date":"2025-08-03","status":"preached","seriesId":"series-psalms","tags":["prayer","grace","psalm"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Nowhere to go from your presence","content":"The psalm is not a threat. It is a relief: there is no place you can get to where he is not already."},{"type":"scripture","ref":"Psalm 139:7-8","translation":"ESV","text":"Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!"},{"type":"scripture","ref":"Psalm 139:23-24","translation":"ESV","text":"Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting!"},{"type":"application","content":"Pray verse 23 and then sit still long enough to be searched."}]},{"title":"I Lift Up My Eyes","primaryPassage":"Psalm 121","date":"2025-07-27","status":"preached","seriesId":"series-psalms","tags":["providence","rest","psalm"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"A song for the road up","content":"Pilgrims sang this climbing to Jerusalem, with the hills full of bandits. The hills are not the help. The maker of them is."},{"type":"scripture","ref":"Psalm 121:1-2","translation":"ESV","text":"I lift up my eyes to the hills. From where does my help come? My help comes from the LORD, who made heaven and earth."},{"type":"scripture","ref":"Psalm 121:3-4","translation":"ESV","text":"He will not let your foot be moved; he who keeps you will not slumber. Behold, he who keeps Israel will neither slumber nor sleep."},{"type":"application","content":"Say verse 4 at the moment tonight when you cannot sleep. He is not sleeping either, so you can."}]},{"title":"Teach Us to Number Our Days","primaryPassage":"Psalm 90","date":"2025-07-20","status":"preached","seriesId":"series-psalms","tags":["wisdom","psalm","faithfulness"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"From everlasting to everlasting","content":"Moses, who lived to a hundred and twenty, calls a life a watch in the night. The point is not that we are small. It is that God is the dwelling place."},{"type":"scripture","ref":"Psalm 90:12","translation":"ESV","text":"So teach us to number our days that we may get a heart of wisdom."},{"type":"illustration","heading":"Thirty-one Septembers","content":"A teacher of thirty-one years: \\"Every September they are new, even when I am not.\\"","illustrationId":"story-septembers"},{"type":"application","content":"Count, roughly, how many Sundays you have left. Then decide what the next one is for."}]},{"title":"A Clean Heart","primaryPassage":"Psalm 51","date":"2025-07-13","status":"preached","seriesId":"series-psalms","tags":["forgiveness","psalm"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"A king with nowhere to hide","content":"David has been found out by a prophet, and the psalm is what a man says when the excuses are gone."},{"type":"scripture","ref":"Psalm 51:10-12","translation":"ESV","text":"Create in me a clean heart, O God, and renew a right spirit within me. Cast me not away from your presence, and take not your Holy Spirit from me. Restore to me the joy of your salvation, and uphold me with a willing spirit."},{"type":"application","content":"Confess the specific thing, not the general one. God already knows which it is."}]},{"title":"Every Tear","occasion":"Funeral","primaryPassage":"Revelation 21:1-7","date":"2025-07-09","status":"preached","tags":["hope","suffering"],"church":"Grace Fellowship","minutes":13,"blocks":[{"type":"point","heading":"He will wipe away","content":"The last pages of the Bible do not say there will be no tears. They say whose hand dries them."},{"type":"scripture","ref":"Revelation 21:3-4","translation":"ESV","text":"And I heard a loud voice from the throne saying, \\"Behold, the dwelling place of God is with man. He will dwell with them, and they will be his people, and God himself will be with them as their God. He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.\\""},{"type":"illustration","heading":"Grandmother's hymnal","content":"Her hymnal had a pencilled date beside every hymn sung at a funeral she went to. Beside \\"It Is Well\\" there were eleven. Today there are twelve.","illustrationId":"story-hymnal"},{"type":"note","content":"The family asked for \\"It Is Well\\" at the end. Let it be sung, not played."}]},{"title":"As the Deer","primaryPassage":"Psalm 42","date":"2025-07-06","status":"preached","seriesId":"series-psalms","tags":["suffering","hope","psalm"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"Talking to your own soul","content":"Three times the psalmist asks his soul why it is cast down, and three times answers it. He does not wait to feel better. He preaches to himself."},{"type":"scripture","ref":"Psalm 42:1-2","translation":"ESV","text":"As a deer pants for flowing streams, so pants my soul for you, O God. My soul thirsts for God, for the living God. When shall I come and appear before God?"},{"type":"application","content":"When the soul is cast down this week, ask it why, out loud, and tell it where to put its hope."}]},{"title":"One Thing","primaryPassage":"Psalm 27","date":"2025-06-29","status":"preached","seriesId":"series-psalms","tags":["fear","prayer","psalm"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Whom shall I fear","content":"David lists his enemies and then narrows his request to one thing. The fears are many. The want is one."},{"type":"scripture","ref":"Psalm 27:4","translation":"ESV","text":"One thing have I asked of the LORD, that will I seek after: that I may dwell in the house of the LORD all the days of my life, to gaze upon the beauty of the LORD and to inquire in his temple."},{"type":"application","content":"Write down the many things you are asking for, then the one thing. Pray the one."}]},{"title":"The Lord Is My Shepherd","primaryPassage":"Psalm 23","date":"2025-06-22","status":"preached","seriesId":"series-psalms","tags":["psalm","rest","providence"],"lengthMinutes":30,"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"A psalm for people who are not shepherds","minutes":10,"content":"Nobody in this room keeps sheep. Everybody in this room has said this psalm at a graveside.","paragraphs":[{"text":"David wrote it as a man who had done the job. The staff was a tool before it was a comfort."},{"text":"The first line is the whole psalm. Everything after it is what 'I shall not want' looks like on an ordinary Tuesday."}]},{"type":"scripture","ref":"Psalm 23:1-3","translation":"ESV","text":"The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake."},{"type":"point","heading":"The valley is on the route","minutes":10,"content":"The psalm does not go around the valley. It goes through, and the shepherd is still there, closer than before: the psalm turns from \\"he\\" to \\"you\\".","inline":[{"text":"The psalm does not go around the valley. It goes through, and the shepherd is still there, closer than before: "},{"text":"the psalm turns from \\"he\\" to \\"you\\".","styles":{"key":true}}],"paragraphs":[{"text":"'For you are with me' is the hinge. Before it, David talks about God. After it, he talks to him."}]},{"type":"scripture","ref":"Psalm 23:4","translation":"ESV","text":"Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me."},{"type":"illustration","heading":"Grandmother's hymnal","content":"Beside this psalm in my grandmother's hymnal there were eleven pencilled dates. She had walked the valley with eleven people and written each one down.","illustrationId":"story-hymnal"},{"type":"point","heading":"Goodness and mercy follow","minutes":6,"content":"Not 'might follow'. Follow, like the two sheepdogs at the back of the flock, all the days."},{"type":"scripture","ref":"Psalm 23:6","translation":"ESV","text":"Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever."},{"type":"application","heading":"This week","content":"Say the psalm aloud once a day this week, at the same hour, until you can say it without the page."},{"type":"reflection","content":"Which line of the psalm is hardest to say as if you meant it?"}]},{"title":"Planted by Streams","primaryPassage":"Psalm 1","date":"2025-06-15","status":"preached","seriesId":"series-psalms","tags":["wisdom","psalm","faithfulness"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"Two roads, one tree","content":"The Psalter opens with a choice before it opens with a prayer. Where you stand, sit, and walk decides what you become."},{"type":"scripture","ref":"Psalm 1:1-3","translation":"ESV","text":"Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers; but his delight is in the law of the LORD, and on his law he meditates day and night. He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers."},{"type":"application","content":"Meditate means mutter. Take one verse and say it under your breath all week."}]},{"title":"El amor nunca deja de ser","occasion":"Wedding","primaryPassage":"1 Corintios 13:1-13","date":"2025-06-07","status":"preached","tags":["love","spanish"],"church":"Iglesia Nueva Esperanza","minutes":12,"blocks":[{"type":"point","heading":"Un capítulo escrito para una iglesia que peleaba","content":"Pablo no lo escribió para una boda. Lo escribió para gente que no se soportaba. Por eso sirve para un matrimonio."},{"type":"scripture","ref":"1 Corintios 13:4","translation":"RVR1960","text":"El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece;"},{"type":"application","content":"Marcos y Daniela: lean el versículo 4 cada noche y pongan su nombre donde dice \\"el amor\\". Verán cuál de los dos cuesta más."}]},{"title":"For Such a Time","primaryPassage":"Esther 4:1-17","date":"2025-05-25","status":"preached","tags":["providence","fear","narrative"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"A book where God is never named","content":"Esther never mentions God, and he is on every page. Mordecai's question is the closest it comes."},{"type":"scripture","ref":"Esther 4:14","translation":"ESV","text":"For if you keep silent at this time, relief and deliverance will rise for the Jews from another place, but you and your father's house will perish. And who knows whether you have not come to the kingdom for such a time as this?"},{"type":"application","content":"Where are you placed this year that nobody else is? That is the time."}]},{"title":"Sufficient Grace","primaryPassage":"2 Corinthians 12:1-10","date":"2025-05-11","status":"preached","tags":["grace","suffering","letters"],"church":"Hope Chapel","minutes":31,"blocks":[{"type":"point","heading":"Three times I pleaded","content":"Paul asked for the thorn to go, and the answer was no, and he calls the no a grace. This is the hardest sentence in his letters."},{"type":"scripture","ref":"2 Corinthians 12:9","translation":"ESV","text":"But he said to me, \\"My grace is sufficient for you, for my power is made perfect in weakness.\\" Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me."},{"type":"application","content":"The thorn you have asked three times about: ask once more, and then ask what power is being made perfect in it."}]},{"title":"Burning Hearts","occasion":"Easter","primaryPassage":"Luke 24:13-35","date":"2025-04-20","status":"preached","tags":["hope","resurrection","narrative"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Seven miles the wrong way","content":"Two disciples walk away from Jerusalem on Easter afternoon, and Jesus walks with them in the wrong direction until they turn round."},{"type":"scripture","ref":"Luke 24:32","translation":"ESV","text":"They said to each other, \\"Did not our hearts burn within us while he talked to us on the road, while he opened to us the Scriptures?\\""},{"type":"point","heading":"Known in the breaking of the bread","content":"They recognised him at the table, not in the lecture. Then he vanished, and they ran seven miles back in the dark."},{"type":"application","content":"Walk with someone going the wrong way this week. Do not correct the direction. Stay until the bread."}]},{"title":"The Curtain Torn","occasion":"Good Friday","primaryPassage":"Mark 15:33-39","date":"2025-04-18","status":"preached","tags":["suffering","grace"],"church":"Grace Fellowship","minutes":20,"blocks":[{"type":"point","heading":"From top to bottom","content":"Nobody could reach the top of that curtain. Mark records the direction of the tear so no one will think a man did it."},{"type":"scripture","ref":"Mark 15:37-38","translation":"ESV","text":"And Jesus uttered a loud cry and breathed his last. And the curtain of the temple was torn in two, from top to bottom."},{"type":"note","content":"Read the passage, preach ten minutes, then the stripping of the table. No music after."}]},{"title":"The Father Who Runs","occasion":"Lent","primaryPassage":"Luke 15:11-32","date":"2025-03-23","status":"preached","tags":["grace","forgiveness","parables"],"church":"Grace Fellowship","minutes":33,"blocks":[{"type":"point","heading":"He saw him a long way off","content":"Which means he was looking. Every day, down that road."},{"type":"scripture","ref":"Luke 15:20","translation":"ESV","text":"And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him."},{"type":"illustration","heading":"The wrong bus","content":"A six-year-old asleep on the wrong bus, and the driver who finished his route, then drove the whole of it again with one passenger.","illustrationId":"story-wrong-bus"},{"type":"point","heading":"The older brother in the field","content":"The parable ends outside the party, with the father still pleading. Jesus leaves the door open because the Pharisees are standing in it."},{"type":"reflection","content":"Which brother are you this Lent, and which one does the father go out to?"}]},{"title":"Yet I Will Rejoice","primaryPassage":"Habakkuk 3:17-19","date":"2025-03-02","status":"preached","tags":["suffering","hope","prophecy"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Though the fig tree should not blossom","content":"The prophet lists every way a farmer can be ruined, and then says yet. The whole book has been an argument with God, and this is where it lands."},{"type":"scripture","ref":"Habakkuk 3:17-18","translation":"ESV","text":"Though the fig tree should not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation."},{"type":"application","content":"Write your own verse 17: the losses, honestly. Then write \\"yet\\"."}]},{"title":"De tal manera amó Dios","primaryPassage":"Juan 3:1-21","date":"2025-02-16","status":"preached","tags":["grace","love","spanish"],"church":"Iglesia Nueva Esperanza","minutes":33,"blocks":[{"type":"point","heading":"Un maestro que llega de noche","content":"Nicodemo viene cuando nadie lo ve. Jesús no le reprocha la hora. Le habla del viento.","paragraphs":[{"text":"Nacer de nuevo no es un esfuerzo. Es gracia: nadie se da a luz a sí mismo."}]},{"type":"scripture","ref":"Juan 3:16","translation":"RVR1960","text":"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."},{"type":"application","content":"Digan el versículo con su propio nombre en lugar de \\"el mundo\\". Así lo escuchó Nicodemo."}]},{"title":"Not With Sword and Spear","primaryPassage":"1 Samuel 17:32-51","date":"2025-02-09","status":"preached","tags":["fear","faithfulness","narrative"],"church":"Grace Fellowship","minutes":32,"blocks":[{"type":"point","heading":"The boy who would not wear the armour","content":"Saul's armour is the sensible choice. David takes it off because it is not his, and walks out with what is."},{"type":"scripture","ref":"1 Samuel 17:47","translation":"ESV","text":"and that all this assembly may know that the LORD saves not with sword and spear. For the battle is the LORD's, and he will give you into our hand."},{"type":"application","content":"Name the giant. Then name the five stones you already have."}]},{"title":"What Does the Lord Require","primaryPassage":"Micah 6:1-8","date":"2025-01-19","status":"preached","tags":["justice","love","prophecy"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"A courtroom, and then three verbs","content":"God sues his people and the mountains are the jury. The verdict is not a sacrifice. It is a way of walking."},{"type":"scripture","ref":"Micah 6:8","translation":"ESV","text":"He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?"},{"type":"application","content":"Do justice: one concrete act for someone who cannot repay it, before the month ends."}]},{"title":"A New Thing","occasion":"New Year","primaryPassage":"Isaiah 43:16-21","date":"2025-01-05","status":"preached","tags":["hope","prophecy"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"Remember not the former things","content":"This is said by the God who spent the previous chapters telling them to remember. The point is not amnesia. It is that the past is not the biggest thing in the room."},{"type":"scripture","ref":"Isaiah 43:18-19","translation":"ESV","text":"Remember not the former things, nor consider the things of old. Behold, I am doing a new thing; now it springs forth, do you not perceive it? I will make a way in the wilderness and rivers in the desert."},{"type":"application","content":"Write the one former thing you keep consulting, and put the page away until Easter."}]},{"title":"The Word Became Flesh","occasion":"Christmas","primaryPassage":"John 1:1-14","date":"2024-12-24","status":"preached","seriesId":"series-comfort","tags":["hope","grace"],"church":"Grace Fellowship","minutes":18,"blocks":[{"type":"point","heading":"And dwelt among us","content":"John has no stable and no shepherds. He has a sentence: the Word pitched his tent with us."},{"type":"scripture","ref":"John 1:14","translation":"ESV","text":"And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth."},{"type":"note","content":"Candlelight. Short. The children have been up since five."}]},{"title":"A Child Is Born","occasion":"Advent","primaryPassage":"Isaiah 9:1-7","date":"2024-12-22","status":"preached","seriesId":"series-comfort","tags":["hope","prophecy"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"Light in Galilee first","content":"The light comes to the despised north before it comes to the capital. It always has."},{"type":"scripture","ref":"Isaiah 9:2","translation":"ESV","text":"The people who walked in darkness have seen a great light; those who dwelt in a land of deep darkness, on them has light shone."},{"type":"scripture","ref":"Isaiah 9:6","translation":"ESV","text":"For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."},{"type":"application","content":"Give the four names of the child to the four worries you carry into Christmas."}]},{"title":"Immanuel","occasion":"Advent","primaryPassage":"Isaiah 7:10-17","date":"2024-12-15","status":"preached","seriesId":"series-comfort","tags":["fear","providence","prophecy"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"A sign to a king who did not want one","content":"Ahaz refuses to ask. God gives the sign anyway, and it is a child."},{"type":"scripture","ref":"Isaiah 7:14","translation":"ESV","text":"Therefore the Lord himself will give you a sign. Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel."},{"type":"application","content":"God with us is the whole of Christmas. Say the name in the hard room this week."}]},{"title":"A Shoot From the Stump","occasion":"Advent","primaryPassage":"Isaiah 11:1-10","date":"2024-12-08","status":"preached","seriesId":"series-comfort","tags":["hope","justice","prophecy"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Life from what was cut down","content":"The family tree of David has been felled. Isaiah looks at the stump and sees a shoot."},{"type":"scripture","ref":"Isaiah 11:1","translation":"ESV","text":"There shall come forth a shoot from the stump of Jesse, and a branch from his roots shall bear fruit."},{"type":"scripture","ref":"Isaiah 11:6","translation":"ESV","text":"The wolf shall dwell with the lamb, and the leopard shall lie down with the young goat, and the calf and the lion and the fattened calf together; and a little child shall lead them."},{"type":"application","content":"Where has something in your life been cut to the stump? Look there for the shoot."}]},{"title":"Comfort, Comfort","occasion":"Advent","primaryPassage":"Isaiah 40:1-11","date":"2024-12-01","status":"preached","seriesId":"series-comfort","tags":["hope","suffering","prophecy"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"Speak tenderly","content":"The first word after thirty-nine chapters of judgement is a word said twice, because once would not be believed."},{"type":"scripture","ref":"Isaiah 40:1-2","translation":"ESV","text":"Comfort, comfort my people, says your God. Speak tenderly to Jerusalem, and cry to her that her warfare is ended, that her iniquity is pardoned, that she has received from the LORD's hand double for all her sins."},{"type":"scripture","ref":"Isaiah 40:11","translation":"ESV","text":"He will tend his flock like a shepherd; he will gather the lambs in his arms; he will carry them in his bosom, and gently lead those that are with young."},{"type":"application","content":"Say one tender thing this week to someone whose warfare has gone on too long."}]},{"title":"Let the Peace of Christ Rule","occasion":"Thanksgiving","primaryPassage":"Colossians 3:12-17","date":"2024-11-24","status":"preached","tags":["rest","love","generosity","letters"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"Put on, and be thankful","content":"Paul describes the church as getting dressed: compassion, kindness, humility, meekness, patience. Over all of them, love. And then, three times in three verses, thanks."},{"type":"scripture","ref":"Colossians 3:15","translation":"ESV","text":"And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful."},{"type":"application","content":"Three thank-yous before Thursday, to people who have not heard one from you in a year."}]},{"title":"Strangers and Exiles","primaryPassage":"Hebrews 11:8-16","date":"2024-11-10","status":"preached","tags":["hope","faithfulness","letters"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Tents and a city","content":"Abraham lived in tents his whole life because he was looking for a city with foundations. The tent was not the failure of the promise. It was the shape of waiting for it."},{"type":"scripture","ref":"Hebrews 11:13","translation":"ESV","text":"These all died in faith, not having received the things promised, but having seen them and greeted them from afar, and having acknowledged that they were strangers and exiles on the earth."},{"type":"application","content":"Hold one possession this week a little more loosely, on purpose."}]},{"title":"Two Houses","primaryPassage":"Matthew 7:13-29","date":"2024-11-03","status":"preached","seriesId":"series-mount","tags":["wisdom","faithfulness"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"The storm comes to both","content":"The two builders got the same rain. The difference was not the weather but what the house was standing on."},{"type":"scripture","ref":"Matthew 7:24-25","translation":"ESV","text":"Everyone then who hears these words of mine and does them will be like a wise man who built his house on the rock. And the rain fell, and the floods came, and the winds blew and beat on that house, but it did not fall, because it had been founded on the rock."},{"type":"application","content":"Pick one sentence from these three chapters and do it this week. Hearing was last week."}]},{"title":"Ask, Seek, Knock","primaryPassage":"Matthew 7:1-12","date":"2024-10-27","status":"preached","seriesId":"series-mount","tags":["prayer","grace"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"Three verbs, present tense","content":"Keep asking, keep seeking, keep knocking: the Greek is continuous. This is not a slot machine. It is a door."},{"type":"scripture","ref":"Matthew 7:7","translation":"ESV","text":"Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you."},{"type":"application","content":"Ask for the same thing every day for a month, and keep a page of what happens."}]},{"title":"Where Your Treasure Is","primaryPassage":"Matthew 6:19-34","date":"2024-10-20","status":"preached","seriesId":"series-mount","tags":["fear","generosity","providence"],"church":"Grace Fellowship","minutes":32,"blocks":[{"type":"point","heading":"The heart follows the money","content":"Jesus does not say the heart leads and the treasure follows. He says it the other way round, and it is the most practical sentence in the sermon."},{"type":"scripture","ref":"Matthew 6:21","translation":"ESV","text":"For where your treasure is, there your heart will be also."},{"type":"scripture","ref":"Matthew 6:34","translation":"ESV","text":"Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble."},{"type":"application","content":"Move some money toward the thing you wish you cared about more. The heart will follow."}]},{"title":"In Secret","primaryPassage":"Matthew 6:1-18","date":"2024-10-13","status":"preached","seriesId":"series-mount","tags":["prayer","faithfulness"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"A Father who sees in secret","content":"Giving, praying, fasting: three things Jesus assumes we do, and one instruction for all three. Shut the door."},{"type":"scripture","ref":"Matthew 6:6","translation":"ESV","text":"But when you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you."},{"type":"application","content":"Give something this week that no one, not even the treasurer, can trace to you."}]},{"title":"Jehová es mi pastor","primaryPassage":"Salmo 23","date":"2024-10-13","status":"preached","tags":["psalm","rest","providence","spanish"],"lengthMinutes":30,"church":"Iglesia Nueva Esperanza","minutes":32,"blocks":[{"type":"point","heading":"Un salmo para gente que no cuida ovejas","minutes":10,"content":"Nadie aquí cuida ovejas. Pero todos aquí han dicho este salmo junto a una tumba.","paragraphs":[{"text":"David lo escribió como alguien que había hecho ese trabajo. La vara fue herramienta antes de ser consuelo. La primera línea es todo el salmo. Lo que sigue es cómo se ve 'nada me faltará' un martes cualquiera.","inline":[{"text":"David lo escribió como alguien que había hecho ese trabajo. La vara fue herramienta antes de ser consuelo. "},{"text":"La primera línea es todo el salmo.","styles":{"key":true}},{"text":" Lo que sigue es cómo se ve 'nada me faltará' un martes cualquiera."}]}]},{"type":"scripture","ref":"Salmo 23:1-3","translation":"RVR1960","text":"Jehová es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará. Confortará mi alma; me guiará por sendas de justicia por amor de su nombre."},{"type":"point","heading":"El valle está en el camino","minutes":10,"content":"El salmo no rodea el valle. Lo atraviesa, y el pastor sigue ahí, más cerca que antes: el salmo pasa de 'él' a 'tú'.","paragraphs":[{"text":"'Porque tú estarás conmigo' es la bisagra. Antes, David habla de Dios. Después, habla con él."}]},{"type":"scripture","ref":"Salmo 23:4","translation":"RVR1960","text":"Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento."},{"type":"illustration","heading":"La mesa larga","content":"Una hermana de esta iglesia me contó que en la casa de su abuela siempre había una silla más que personas. \\"Por si alguien llega.\\" Y alguien siempre llegaba.","illustrationId":"story-long-table"},{"type":"point","heading":"El bien y la misericordia me seguirán","minutes":6,"content":"No 'quizás me sigan'. Me seguirán, como los dos perros que cuidan la retaguardia del rebaño, todos los días."},{"type":"scripture","ref":"Salmo 23:6","translation":"RVR1960","text":"Ciertamente el bien y la misericordia me seguirán todos los días de mi vida, y en la casa de Jehová moraré por largos días."},{"type":"application","heading":"Esta semana","content":"Digan el salmo en voz alta una vez al día esta semana, a la misma hora, hasta que puedan decirlo sin la página."},{"type":"reflection","content":"¿Qué línea del salmo les cuesta más decir como si la creyeran?"}]},{"title":"But I Say to You","primaryPassage":"Matthew 5:21-48","date":"2024-10-06","status":"preached","seriesId":"series-mount","tags":["forgiveness","love","justice"],"church":"Grace Fellowship","minutes":33,"blocks":[{"type":"point","heading":"Six times, deeper","content":"Murder goes down to anger, adultery to the look, the oath to a plain yes. Jesus does not lower the law. He finds its floor."},{"type":"scripture","ref":"Matthew 5:44","translation":"ESV","text":"But I say to you, Love your enemies and pray for those who persecute you,"},{"type":"application","content":"Pray for your enemy by name, tonight, before you have decided whether they deserve it."}]},{"title":"Salt and Light","primaryPassage":"Matthew 5:13-20","date":"2024-09-29","status":"preached","seriesId":"series-mount","tags":["witness","faithfulness"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Salt in the food, light on the stand","content":"Both are useless where they are stored and useful where they are spent."},{"type":"scripture","ref":"Matthew 5:16","translation":"ESV","text":"In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven."},{"type":"application","content":"Do one good work this week that nobody at church will see."}]},{"title":"Blessed Are","primaryPassage":"Matthew 5:1-12","date":"2024-09-22","status":"preached","seriesId":"series-mount","tags":["grace","hope"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"A kingdom with the wrong people at the front","content":"The poor, the mourning, the meek: Jesus starts his sermon by blessing everyone the world leaves at the back."},{"type":"scripture","ref":"Matthew 5:3-4","translation":"ESV","text":"Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they shall be comforted."},{"type":"application","content":"Read the eight blessings aloud with the name of someone you know after each."}]},{"title":"The Low Whisper","primaryPassage":"1 Kings 19:1-18","date":"2024-08-25","status":"preached","tags":["rest","prayer","fear","narrative"],"church":"Hope Chapel","minutes":30,"blocks":[{"type":"point","heading":"Enough, Lord","content":"The prophet who called fire from heaven on Carmel runs from one woman's letter and asks to die. God's first answer is food and sleep."},{"type":"scripture","ref":"1 Kings 19:11-12","translation":"ESV","text":"And he said, \\"Go out and stand on the mount before the LORD.\\" And behold, the LORD passed by, and a great and strong wind tore the mountains and broke in pieces the rocks before the LORD, but the LORD was not in the wind. And after the wind an earthquake, but the LORD was not in the earthquake. And after the earthquake a fire, but the LORD was not in the fire. And after the fire the sound of a low whisper."},{"type":"application","content":"If you are Elijah under the broom tree this week: eat, sleep, and let God speak after. The order matters."}]},{"title":"Where You Go","primaryPassage":"Ruth 1:1-22","date":"2024-08-11","status":"preached","tags":["faithfulness","love","narrative"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"A foreigner's vow","content":"Ruth has every reason to go home and none to stay. She stays. The whole book turns on a Moabite woman's stubbornness."},{"type":"scripture","ref":"Ruth 1:16","translation":"ESV","text":"But Ruth said, \\"Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.\\""},{"type":"application","content":"Who in this church has nobody left? Walk with them for a season, not a Sunday."}]},{"title":"The Prophet Who Sulked","primaryPassage":"Jonah 4:1-11","date":"2024-07-14","status":"preached","tags":["grace","forgiveness","narrative"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"Angry enough to die","content":"The book ends with a prophet furious that God is merciful, and a question God leaves hanging. It is the only book of the Bible that ends with a question."},{"type":"scripture","ref":"Jonah 4:11","translation":"ESV","text":"And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?"},{"type":"application","content":"Pray for the one person you would be disappointed to see forgiven."}]},{"title":"Love One Another","occasion":"Wedding","primaryPassage":"1 John 4:7-12","date":"2024-06-22","status":"preached","tags":["love"],"church":"Grace Fellowship","minutes":12,"blocks":[{"type":"point","heading":"Love is from God","content":"Nobody invents this. You two did not invent it either; you were given it, and today you promise to pass it on to each other every day."},{"type":"scripture","ref":"1 John 4:11-12","translation":"ESV","text":"Beloved, if God so loved us, we also ought to love one another. No one has ever seen God; if we love one another, God abides in us and his love is perfected in us."},{"type":"application","content":"Every evening, one thing you are grateful for in the other, said aloud. It takes a minute and it will save you years."}]},{"title":"Peace, Be Still","primaryPassage":"Mark 4:35-41","date":"2024-06-16","status":"preached","tags":["fear","faithfulness","narrative"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"Asleep in the stern","content":"The disciples are not wrong that the boat is filling. They are wrong that he does not care."},{"type":"scripture","ref":"Mark 4:39-40","translation":"ESV","text":"And he awoke and rebuked the wind and said to the sea, \\"Peace! Be still!\\" And the wind ceased, and there was a great calm. He said to them, \\"Why are you so afraid? Have you still no faith?\\""},{"type":"reflection","content":"What storm are you shouting over, and what would it change that he is in the boat?"},{"type":"application","content":"Name the storm out loud to him before you name it to anyone else."}]},{"title":"Wind and Fire","occasion":"Pentecost","primaryPassage":"Acts 2:1-21","date":"2024-05-19","status":"preached","tags":["witness","hope","narrative"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"In our own tongues","content":"The miracle of Pentecost is not that one language was spoken. It is that every language was heard."},{"type":"scripture","ref":"Acts 2:2-4","translation":"ESV","text":"And suddenly there came from heaven a sound like a mighty rushing wind, and it filled the entire house where they were sitting. And divided tongues as of fire appeared to them and rested on each one of them. And they were all filled with the Holy Spirit and began to speak in other tongues as the Spirit gave them utterance."},{"type":"application","content":"Learn to say \\"God loves you\\" in the language of the family three doors down."}]},{"title":"The God of Peace Be With You","primaryPassage":"Romans 15:14-16:27","date":"2024-04-14","status":"preached","seriesId":"series-romans","tags":["hope","love","letters"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Twenty-six names","content":"Paul ends the greatest letter ever written with a list of ordinary people, and a third of them are women. The gospel has faces."},{"type":"scripture","ref":"Romans 15:13","translation":"ESV","text":"May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope."},{"type":"scripture","ref":"Romans 15:33","translation":"ESV","text":"May the God of peace be with you all. Amen."},{"type":"application","content":"Write your own chapter sixteen: the names of the people who carried the gospel to you."}]},{"title":"Welcome One Another","primaryPassage":"Romans 14:1-15:13","date":"2024-04-07","status":"preached","seriesId":"series-romans","tags":["love","grace","letters"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"The weak and the strong at one table","content":"Rome's church argued about food and days. Paul does not settle the argument. He settles the table."},{"type":"scripture","ref":"Romans 15:7","translation":"ESV","text":"Therefore welcome one another as Christ has welcomed you, for the glory of God."},{"type":"illustration","heading":"The long table","content":"A woman at Nueva Esperanza told me her grandmother's table always had one chair more than the family. \\"In case someone comes.\\" Someone always came.","illustrationId":"story-long-table"},{"type":"application","content":"Invite the person whose convictions annoy you to Sunday lunch, and do not bring up the convictions."}]},{"title":"He Is Not Here","occasion":"Easter","primaryPassage":"Matthew 28:1-10","date":"2024-03-31","status":"preached","tags":["hope","resurrection","narrative"],"church":"Grace Fellowship","minutes":28,"blocks":[{"type":"point","heading":"The angel sits on the stone","content":"The guards faint and the women stand. The first Easter congregation is two women and an angel with nothing left to guard."},{"type":"scripture","ref":"Matthew 28:5-6","translation":"ESV","text":"But the angel said to the women, \\"Do not be afraid, for I know that you seek Jesus who was crucified. He is not here, for he has risen, as he said. Come, see the place where he lay.\\""},{"type":"point","heading":"Afraid and full of joy","content":"Matthew gives both in one breath. Easter does not remove the fear. It outruns it."},{"type":"application","content":"Go quickly and tell: the first Easter instruction, before the first Easter lunch."}]},{"title":"The Man of Sorrows","occasion":"Good Friday","primaryPassage":"Isaiah 53:1-12","date":"2024-03-29","status":"preached","tags":["suffering","prophecy","grace"],"church":"Grace Fellowship","minutes":22,"blocks":[{"type":"point","heading":"Despised and rejected","content":"Seven hundred years before the cross, the prophet describes a face people look away from. Today we do not look away."},{"type":"scripture","ref":"Isaiah 53:5","translation":"ESV","text":"But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his stripes we are healed."},{"type":"note","content":"No benediction. The service ends in silence and the candle goes out."}]},{"title":"Living Sacrifice","primaryPassage":"Romans 12:1-21","date":"2024-03-24","status":"preached","seriesId":"series-romans","tags":["faithfulness","generosity","letters"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"Therefore, by the mercies","content":"Eleven chapters of what God has done, then one word, therefore, and the rest of the letter is what we do about it."},{"type":"scripture","ref":"Romans 12:1-2","translation":"ESV","text":"I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship. Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."},{"type":"point","heading":"Rejoice with those who rejoice","content":"The second half of the chapter is a list of small verbs. None of them is heroic. All of them are daily."},{"type":"application","content":"Pick one verb from verses 9 to 21 and do it before Wednesday."}]},{"title":"The Depth of the Riches","primaryPassage":"Romans 11:25-36","date":"2024-03-17","status":"preached","seriesId":"series-romans","tags":["providence","wisdom","letters"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Three chapters that end in a song","content":"Paul argues through nine, ten and eleven about Israel and the nations, and when the argument runs out he does not conclude. He sings."},{"type":"scripture","ref":"Romans 11:33","translation":"ESV","text":"Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways!"},{"type":"application","content":"Keep one question for God that you have decided not to answer on his behalf."}]},{"title":"No Condemnation","primaryPassage":"Romans 8:1-27","date":"2024-03-10","status":"preached","seriesId":"series-romans","tags":["grace","hope","prayer","letters"],"church":"Grace Fellowship","minutes":33,"blocks":[{"type":"point","heading":"Therefore now","content":"Seven chapters of argument come to one word: now. Not after you have sorted yourself out."},{"type":"scripture","ref":"Romans 8:1","translation":"ESV","text":"There is therefore now no condemnation for those who are in Christ Jesus."},{"type":"point","heading":"Groanings too deep for words","content":"The Spirit prays the prayers we cannot finish."},{"type":"scripture","ref":"Romans 8:26","translation":"ESV","text":"Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words."},{"type":"application","content":"Pray the prayer you cannot find words for by sitting in silence for five minutes and letting the Spirit have it."}]},{"title":"The Thing I Hate","primaryPassage":"Romans 7:7-25","date":"2024-03-03","status":"preached","seriesId":"series-romans","tags":["suffering","forgiveness","letters"],"church":"Grace Fellowship","minutes":32,"blocks":[{"type":"point","heading":"Paul in the present tense","content":"The apostle does not write \\"I used to\\". He writes \\"I do\\", and every honest person in the room breathes out."},{"type":"scripture","ref":"Romans 7:15","translation":"ESV","text":"For I do not understand my own actions. For I do not do what I want, but I do the very thing I hate."},{"type":"scripture","ref":"Romans 7:24-25","translation":"ESV","text":"Wretched man that I am! Who will deliver me from this body of death? Thanks be to God through Jesus Christ our Lord! So then, I myself serve the law of God with my mind, but with my flesh I serve the law of sin."},{"type":"application","content":"The question in verse 24 is answered by a name, not a technique. Say the name when the thing you hate wins again."}]},{"title":"Walk in Newness","occasion":"Baptism","primaryPassage":"Romans 6:1-23","date":"2024-02-25","status":"preached","seriesId":"series-romans","tags":["grace","faithfulness","letters"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"Buried and raised","content":"Baptism is a funeral and a birth in the same water. Three people go under this morning as one person and come up as another."},{"type":"scripture","ref":"Romans 6:4","translation":"ESV","text":"We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life."},{"type":"application","content":"If you were baptised long ago, find the date. Keep it the way you keep a birthday."}]},{"title":"Many Rooms","occasion":"Funeral","primaryPassage":"John 14:1-6","date":"2024-02-15","status":"preached","tags":["hope","suffering"],"church":"Grace Fellowship","minutes":14,"blocks":[{"type":"point","heading":"Let not your hearts be troubled","content":"Jesus says this on the night he is betrayed, to men who are about to lose him. It is not a command to feel nothing. It is a place to put the trouble."},{"type":"scripture","ref":"John 14:1-3","translation":"ESV","text":"Let not your hearts be troubled. Believe in God; believe also in me. In my Father's house are many rooms. If it were not so, would I have told you that I go to prepare a place for you? And if I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also."},{"type":"illustration","heading":"Grandmother's hymnal","content":"Her hymnal had a pencilled date beside every hymn sung at a funeral she went to, forty years of them. Beside \\"It Is Well\\" there were eleven.","illustrationId":"story-hymnal"},{"type":"application","content":"Say the names of the rooms you are sure of: the ones already filled by people you loved."}]},{"title":"Dust","occasion":"Lent","primaryPassage":"Genesis 3:17-19","date":"2024-02-14","status":"archived","tags":["suffering","forgiveness"],"church":"Grace Fellowship","minutes":12,"blocks":[{"type":"point","heading":"Remember that you are dust","content":"The first Lent sermon is the shortest one in the Bible: nine words from the garden, said with a thumb of ash."},{"type":"scripture","ref":"Genesis 3:19","translation":"ESV","text":"By the sweat of your face you shall eat bread, till you return to the ground, for out of it you were taken; for you are dust, and to dust you shall return."},{"type":"application","content":"Give up the thing you reach for first in the morning, for forty days, and notice what you reach for instead."}]},{"title":"Peace With God","primaryPassage":"Romans 5:1-21","date":"2024-02-11","status":"preached","seriesId":"series-romans","tags":["grace","suffering","hope","letters"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"While we were still sinners","content":"The timing is the point. God did not wait for us to improve."},{"type":"scripture","ref":"Romans 5:8","translation":"ESV","text":"but God shows his love for us in that while we were still sinners, Christ died for us."},{"type":"point","heading":"Suffering, endurance, character, hope","content":"Paul's chain has no missing link, and it starts in the place nobody chooses."},{"type":"application","content":"Tell someone the chapter of your life that produced the most character, and who was with you in it."}]},{"title":"Counted","primaryPassage":"Romans 4:1-25","date":"2024-02-04","status":"preached","seriesId":"series-romans","tags":["faithfulness","grace","letters"],"church":"Grace Fellowship","minutes":29,"blocks":[{"type":"point","heading":"Abraham believed, and that was the whole transaction","content":"He had no law, no temple, no circumcision yet. He had a promise and an old man's trust in it."},{"type":"scripture","ref":"Romans 4:3","translation":"ESV","text":"For what does the Scripture say? \\"Abraham believed God, and it was counted to him as righteousness.\\""},{"type":"application","content":"Write down the promise you are waiting on, and the date you first believed it."}]},{"title":"No Difference","primaryPassage":"Romans 3:9-31","date":"2024-01-28","status":"preached","seriesId":"series-romans","tags":["grace","justice","letters"],"church":"Grace Fellowship","minutes":32,"blocks":[{"type":"point","heading":"Every roof the same colour","content":"Jew and Greek, good and bad, churchgoer and stranger: under the one verdict, and under the one gift."},{"type":"scripture","ref":"Romans 3:23-24","translation":"ESV","text":"for all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus,"},{"type":"illustration","heading":"Snow on the roofs","content":"The morning after the snow, every roof on the street was the same colour, the big houses and the small, the mended and the ones that leaked.","illustrationId":"story-snow"},{"type":"application","content":"Find the person in this church you quietly rank below yourself, and sit with them at the meal."}]},{"title":"Kindness Meant to Lead","primaryPassage":"Romans 2:1-16","date":"2024-01-21","status":"preached","seriesId":"series-romans","tags":["grace","forgiveness","letters"],"church":"Grace Fellowship","minutes":30,"blocks":[{"type":"point","heading":"The judge in the mirror","content":"Chapter one ends with a list of other people's sins, and chapter two begins with the finger turned round."},{"type":"scripture","ref":"Romans 2:4","translation":"ESV","text":"Or do you presume on the riches of his kindness and forbearance and patience, not knowing that God's kindness is meant to lead you to repentance?"},{"type":"application","content":"Name the sin you are quickest to spot in others. Then ask where it lives in you."}]},{"title":"Not Ashamed","primaryPassage":"Romans 1:1-17","date":"2024-01-14","status":"preached","seriesId":"series-romans","tags":["witness","letters","grace"],"church":"Grace Fellowship","minutes":31,"blocks":[{"type":"point","heading":"The gospel is power, not advice","content":"Paul has never been to Rome and opens by telling them what he is not ashamed of. The letter is a visit he cannot yet make."},{"type":"scripture","ref":"Romans 1:16","translation":"ESV","text":"For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek."},{"type":"application","content":"Say what you believe this week in a sentence a neighbour could repeat."}]},{"title":"New Every Morning","occasion":"New Year","primaryPassage":"Lamentations 3:22-26","date":"2024-01-07","status":"preached","tags":["hope","faithfulness","wisdom"],"church":"Grace Fellowship","minutes":27,"blocks":[{"type":"point","heading":"Mercy keeps its hours at dawn","content":"The poem is written from the rubble of Jerusalem. The man who says \\"new every morning\\" has watched his city burn."},{"type":"scripture","ref":"Lamentations 3:22-23","translation":"ESV","text":"The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness."},{"type":"application","content":"Begin the year with a smaller promise than last year's, and keep it on the first grey Monday."}]}]`);
const seeds = {
  series: series$1,
  tags,
  illustrations: illustrations$1,
  sermons: sermons$1
};
function daysFromToday(days) {
  const date = /* @__PURE__ */ new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function yearsToShift(newest, today = /* @__PURE__ */ new Date()) {
  const [year, month, day] = newest.split("-").map(Number);
  let years = today.getFullYear() - year;
  while (years > 0 && new Date(year + years, month - 1, day) > today) years--;
  return Math.max(0, years);
}
const shiftedDay = (date, years) => years ? `${Number(date.slice(0, 4)) + years}${date.slice(4)}` : date;
const SEEDS = seeds;
const DEMO_SERIES = SEEDS.series.map((entry) => ({
  id: entry.id,
  name: entry.name,
  description: entry.description,
  ...entry.retired ? { retired: true } : {},
  ...entry.planned ? { planned: entry.planned.map((plan) => ({ id: plan.id, title: plan.title, ...plan.passage ? { passage: plan.passage } : {}, ...plan.inDays !== void 0 ? { date: daysFromToday(plan.inDays) } : {} })) } : {}
}));
const DEMO_TAGS = SEEDS.tags;
const DEMO_ILLUSTRATIONS = SEEDS.illustrations.map((story) => ({
  id: story.id,
  title: story.title,
  body: story.body,
  source: story.source,
  tags: story.tags,
  createdAt: `${daysFromToday(-story.daysAgo)}T09:00:00.000Z`
}));
const slug = (title) => slugOf(title, "untitled-sermon");
function pathFor(sermon) {
  const date = sermon.datePreached ?? sermon.createdAt.slice(0, 10);
  return `Sermons/${date.slice(0, 4)}/${date}-${slug(sermon.title)}.json`;
}
function seedSermons() {
  const fixed = SEEDS.sermons.flatMap((seed) => [seed.date, ...(seed.preachings ?? []).map((telling) => telling.date)]).filter((day) => typeof day === "string");
  const years = fixed.length ? yearsToShift(fixed.reduce((a, b) => a > b ? a : b)) : 0;
  const dayOf = (entry) => entry.date ? shiftedDay(entry.date, years) : typeof entry.daysAgo === "number" ? daysFromToday(-entry.daysAgo) : null;
  return SEEDS.sermons.map((seed, n) => {
    const datePreached = dayOf(seed);
    const stamp = `${datePreached ?? daysFromToday(-10)}T09:00:00.000Z`;
    const preachings = seed.preachings ? seed.preachings.map((telling) => ({ date: dayOf(telling) ?? datePreached ?? daysFromToday(0), church: telling.church, minutes: telling.minutes })) : seed.church && datePreached ? [{ date: datePreached, church: seed.church, ...seed.minutes ? { minutes: seed.minutes } : {} }] : void 0;
    return {
      id: `demo-${n + 1}`,
      fileVersion: SERMON_FILE_VERSION,
      title: seed.title,
      seriesId: seed.seriesId ?? null,
      primaryPassage: seed.primaryPassage,
      datePreached,
      ...seed.lengthMinutes ? { lengthMinutes: seed.lengthMinutes } : {},
      ...preachings ? { preachings } : {},
      ...seed.occasion ? { occasion: seed.occasion } : {},
      status: seed.status,
      tags: seed.tags,
      createdAt: stamp,
      updatedAt: stamp,
      blocks: seed.blocks.map((block, i) => ({ ...block, id: `demo-${n + 1}-b${i + 1}` }))
    };
  });
}
const SHORT = {
  gen: 1,
  ex: 2,
  exo: 2,
  lev: 3,
  num: 4,
  deut: 5,
  dt: 5,
  josh: 6,
  judg: 7,
  jdg: 7,
  ru: 8,
  "1sam": 9,
  "2sam": 10,
  "1kgs": 11,
  "1ki": 11,
  "2kgs": 12,
  "2ki": 12,
  "1chr": 13,
  "1ch": 13,
  "2chr": 14,
  "2ch": 14,
  ezr: 15,
  neh: 16,
  est: 17,
  esth: 17,
  jb: 18,
  ps: 19,
  psa: 19,
  psalm: 19,
  pss: 19,
  prov: 20,
  pr: 20,
  eccl: 21,
  ecc: 21,
  qoh: 21,
  song: 22,
  sos: 22,
  cant: 22,
  isa: 23,
  jer: 24,
  lam: 25,
  ezek: 26,
  eze: 26,
  dan: 27,
  hos: 28,
  joe: 29,
  am: 30,
  amo: 30,
  ob: 31,
  obad: 31,
  jon: 32,
  mic: 33,
  nah: 34,
  hab: 35,
  zeph: 36,
  zep: 36,
  hag: 37,
  zech: 38,
  zec: 38,
  mal: 39,
  mt: 40,
  matt: 40,
  mk: 41,
  mrk: 41,
  lk: 42,
  luk: 42,
  jn: 43,
  jhn: 43,
  ac: 44,
  rom: 45,
  ro: 45,
  "1cor": 46,
  "1co": 46,
  "2cor": 47,
  "2co": 47,
  gal: 48,
  eph: 49,
  phil: 50,
  php: 50,
  col: 51,
  "1thess": 52,
  "1th": 52,
  "2thess": 53,
  "2th": 53,
  "1tim": 54,
  "1ti": 54,
  "2tim": 55,
  "2ti": 55,
  tit: 56,
  phlm: 57,
  phm: 57,
  heb: 58,
  jas: 59,
  jam: 59,
  "1pet": 60,
  "1pe": 60,
  "2pet": 61,
  "2pe": 61,
  "1jn": 62,
  "1jo": 62,
  "2jn": 63,
  "2jo": 63,
  "3jn": 64,
  "3jo": 64,
  jud: 65,
  jude: 65,
  rev: 66,
  re: 66
};
const fold = foldText;
const NAMES = LANGUAGES.flatMap((entry) => BOOK_NAMES[entry.code].map((name, index) => ({ key: fold(name), number: index + 1 })));
function bookNumber(name) {
  const key = fold(name);
  if (!key) return null;
  const exact = NAMES.find((entry) => entry.key === key);
  if (exact) return exact.number;
  if (key in SHORT) return SHORT[key];
  const opening = new Set(NAMES.filter((entry) => entry.key.startsWith(key) && key.length >= 3).map((entry) => entry.number));
  return opening.size === 1 ? [...opening][0] : null;
}
const REFERENCE = new RegExp("^\\s*((?:[1-3]\\s*\\.?\\s*)?\\p{L}+(?:[\\s.]+(?:of\\s+)?\\p{L}+)*)\\.?\\s*(\\d+)?(?:\\s*[:.,]\\s*(\\d+))?(?:\\s*[-–]\\s*(\\d+)(?:\\s*[:.,]\\s*(\\d+))?)?\\s*$", "iu");
function parseReference(text) {
  const match = REFERENCE.exec(text);
  if (!match) return [];
  const book = bookNumber(match[1] ?? "");
  if (book === null) return [];
  const chapter = match[2] ? Number(match[2]) : null;
  const verse = match[3] ? Number(match[3]) : null;
  const endA = match[4] ? Number(match[4]) : null;
  const endB = match[5] ? Number(match[5]) : null;
  if (chapter === null) return [{ book, chapterStart: 1, verseStart: 1, chapterEnd: LAST_VERSE_SENTINEL, verseEnd: LAST_VERSE_SENTINEL }];
  if (verse === null) {
    return [{ book, chapterStart: chapter, verseStart: 1, chapterEnd: endA ?? chapter, verseEnd: LAST_VERSE_SENTINEL }];
  }
  if (endA !== null && endB !== null) return [{ book, chapterStart: chapter, verseStart: verse, chapterEnd: endA, verseEnd: endB }];
  return [{ book, chapterStart: chapter, verseStart: verse, chapterEnd: chapter, verseEnd: endA ?? verse }];
}
function describeReference(text, language = DEFAULT_LANGUAGE) {
  const ranges2 = parseReference(text);
  return ranges2.length ? ranges2.map((range) => formatRange(range, language)).join(", ") : null;
}
function overlaps(a, b) {
  if (a.book !== b.book) return false;
  const start = (r) => r.chapterStart * 1e3 + r.verseStart;
  const end = (r) => r.chapterEnd * 1e3 + r.verseEnd;
  return start(a) <= end(b) && end(a) >= start(b);
}
const clone = (value) => JSON.parse(JSON.stringify(value));
const now = () => (/* @__PURE__ */ new Date()).toISOString();
const sermons = /* @__PURE__ */ new Map();
for (const sermon of seedSermons()) sermons.set(pathFor(sermon), sermon);
let series = clone(DEMO_SERIES);
let illustrations = clone(DEMO_ILLUSTRATIONS);
let shapes = [];
let tagsFile = clone(DEMO_TAGS);
let views = [
  { id: "view-romans", name: "Romans", query: { book: 45 }, pinned: true },
  { id: "view-preached", name: "Preached this year", query: { status: "preached", from: `${(/* @__PURE__ */ new Date()).getFullYear()}-01-01` } },
  { id: "view-funerals", name: "Funerals", query: { occasion: "Funeral" } },
  { id: "view-korean", name: "Korean service", query: { tag: "korean" } }
];
let appSettings = { ...DEFAULT_APP_SETTINGS };
let editorSettings = clone(DEFAULT_EDITOR_SETTINGS);
let podium = {
  theme: "dark",
  fontScale: 1,
  targetMinutes: 30,
  showNotes: true,
  reading: "manuscript",
  rail: true,
  pace: 130,
  clock: "elapsed",
  pointTiming: true,
  nextLine: true,
  touchBar: true,
  keyLine: true,
  marks: true,
  warnFive: true,
  warnAtTime: true,
  warnPointOver: true
};
const libraryListeners = /* @__PURE__ */ new Set();
const changed = () => {
  for (const listener of libraryListeners) listener();
};
const LICENSE = { state: "active", expiresAt: null, lastCheckedAt: now(), daysRemaining: null };
const FIRST = [...sermons.entries()].find(([, sermon]) => sermon.status === "draft")?.[0] ?? null;
const byDate = (a, b) => {
  if (a.datePreached === null && b.datePreached !== null) return -1;
  if (b.datePreached === null && a.datePreached !== null) return 1;
  return (b.datePreached ?? "").localeCompare(a.datePreached ?? "") || b.updatedAt.localeCompare(a.updatedAt);
};
const summary = (sermon, path) => ({
  id: sermon.id,
  title: sermon.title,
  filePath: path,
  datePreached: sermon.datePreached,
  primaryPassage: sermon.primaryPassage,
  status: sermon.status,
  updatedAt: sermon.updatedAt
});
function ranges(sermon) {
  const refs = [sermon.primaryPassage ?? "", ...sermon.blocks.map((block) => block.type === "scripture" ? block.ref : "")];
  return refs.flatMap((ref) => ref ? parseReference(ref) : []);
}
const headline = (sermon) => sermon.primaryPassage ? parseReference(sermon.primaryPassage)[0] ?? null : null;
function byBook(a, b) {
  const ra = headline(a);
  const rb = headline(b);
  if (!ra || !rb) return Number(ra === null) - Number(rb === null);
  return ra.book - rb.book || ra.chapterStart - rb.chapterStart;
}
function dayOfYear(iso) {
  const date = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.round((date.getTime() - start.getTime()) / 864e5) + 1;
}
const words = (sermon) => flattenForSearch(sermon).toLowerCase();
function wordStart(term, flags = "iu") {
  return new RegExp(`(?<![\\p{L}\\p{N}])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, flags);
}
function snippet(sermon, terms) {
  const text = flattenForSearch(sermon);
  const found = terms.map((term) => text.search(wordStart(term))).filter((i) => i >= 0);
  const at = found.length ? Math.min(...found) : 0;
  const start = Math.max(0, at - 50);
  const end = Math.min(text.length, at + 90);
  let piece = (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
  for (const term of terms) {
    piece = piece.replace(wordStart(term, "giu"), (m) => `${SNIPPET_MARK_OPEN}${m}${SNIPPET_MARK_CLOSE}`);
  }
  return piece;
}
function query(q) {
  const text = q.text?.trim().toLowerCase() ?? "";
  const terms = text ? text.split(/\s+/) : [];
  const asked = text ? parseReference(text) : [];
  const rows = [...sermons.entries()].filter(([, s]) => q.status ? s.status === q.status : q.hideArchived ? s.status !== "archived" : true).filter(([, s]) => q.church ? (s.preachings ?? []).some((p) => p.church?.toLowerCase() === q.church.toLowerCase()) : true).filter(([, s]) => q.seriesId === null ? s.seriesId === null : q.seriesId !== void 0 ? s.seriesId === q.seriesId : true).filter(([, s]) => [...q.tag ? [q.tag] : [], ...q.tags ?? []].every((wanted) => s.tags.some((tag) => tag.toLowerCase() === wanted.toLowerCase()))).filter(([, s]) => q.occasion?.trim() ? (s.occasion ?? "").toLowerCase() === q.occasion.trim().toLowerCase() : true).filter(([, s]) => q.from ? (s.datePreached ?? "") >= q.from : true).filter(([, s]) => q.to ? (s.datePreached ?? "") <= q.to && s.datePreached !== null : true).filter(([, s]) => {
    if (!q.week) return true;
    if (!s.datePreached || s.datePreached >= `${q.week.slice(0, 4)}-01-01`) return false;
    const gap = Math.abs(dayOfYear(s.datePreached) - dayOfYear(q.week));
    return gap <= 3 || gap >= 362;
  }).filter(([, s]) => {
    if (q.book === void 0) return true;
    return ranges(s).some((r) => r.book === q.book && (q.chapter === void 0 || r.chapterStart <= q.chapter && r.chapterEnd >= q.chapter));
  });
  const order = (list) => q.sort === "title" ? [...list].sort(([, a], [, b]) => a.title.localeCompare(b.title, void 0, { sensitivity: "base" })) : q.sort === "edited" ? [...list].sort(([, a], [, b]) => b.updatedAt.localeCompare(a.updatedAt)) : q.sort === "book" ? [...list].sort(([, a], [, b]) => byBook(a, b) || byDate(a, b)) : [...list].sort(([, a], [, b]) => byDate(a, b));
  const hit = ([path, s], withSnippet) => ({
    ...summary(s, path),
    book: headline(s)?.book ?? null,
    chapter: headline(s)?.chapterStart ?? null,
    occasion: s.occasion ?? null,
    seriesId: s.seriesId,
    ...withSnippet && terms.length ? { snippet: snippet(s, terms) } : {}
  });
  if (!terms.length) return order(rows).map((row) => hit(row, false));
  const touching = asked.length ? order(rows.filter(([, s]) => ranges(s).some((r) => asked.some((a) => overlaps(a, r))))) : [];
  const seen = new Set(touching.map(([, s]) => s.id));
  const saying = order(rows.filter(([, s]) => !seen.has(s.id) && terms.every((term) => wordStart(term).test(words(s)))));
  return [...touching.map((row) => hit(row, false)), ...saying.map((row) => hit(row, true))].slice(0, q.limit ?? 200);
}
function related(sermonId) {
  const entry = [...sermons.entries()].find(([, s]) => s.id === sermonId);
  if (!entry) return [];
  const [, self] = entry;
  const groups = [];
  const seen = /* @__PURE__ */ new Set([sermonId]);
  const row = (path, s) => ({
    id: s.id,
    title: s.title,
    filePath: path,
    datePreached: s.datePreached,
    status: s.status,
    church: [...s.preachings ?? []].reverse().find((telling) => telling.church)?.church ?? null
  });
  const others = [...sermons.entries()].filter(([, s]) => s.id !== sermonId).sort(([, a], [, b]) => byDate(a, b));
  const take = (list) => {
    const out = [];
    for (const [path, s] of list) {
      if (seen.has(s.id)) continue;
      seen.add(s.id);
      out.push(row(path, s));
      if (out.length === 5) break;
    }
    return out;
  };
  const chapters = /* @__PURE__ */ new Set();
  for (const range of ranges(self)) {
    const name = bookByNumber(range.book)?.name ?? `Book ${range.book}`;
    if (range.chapterEnd >= LAST_VERSE_SENTINEL) {
      if (chapters.has(`${range.book}`)) continue;
      chapters.add(`${range.book}`);
      const list = take(others.filter(([, s]) => ranges(s).some((r) => r.book === range.book)));
      if (list.length) groups.push({ kind: "passage", label: `Also in ${name}`, subject: name, sermons: list });
      continue;
    }
    for (let chapter = range.chapterStart; chapter <= Math.min(range.chapterEnd, range.chapterStart + 11); chapter++) {
      if (chapters.has(`${range.book}:${chapter}`)) continue;
      chapters.add(`${range.book}:${chapter}`);
      const list = take(others.filter(([, s]) => ranges(s).some((r) => r.book === range.book && r.chapterStart <= chapter && r.chapterEnd >= chapter)));
      if (list.length) groups.push({ kind: "passage", label: `Also in ${name} ${chapter}`, subject: `${name} ${chapter}`, sermons: list });
    }
  }
  const told = new Set(self.blocks.flatMap((block) => "illustrationId" in block && block.illustrationId ? [block.illustrationId] : []));
  for (const storyId of told) {
    const story = illustrations.find((entry2) => entry2.id === storyId);
    const list = take(others.filter(([, s]) => s.blocks.some((block) => "illustrationId" in block && block.illustrationId === storyId)));
    if (list.length) groups.push({ kind: "story", label: `Also told: ${story?.title.trim() || "this story"}`, sermons: list });
  }
  if (self.seriesId) {
    const named = series.find((entry2) => entry2.id === self.seriesId);
    const list = others.filter(([, s]) => s.seriesId === self.seriesId).slice(0, 12).map(([path, s]) => row(path, s));
    if (named && list.length) groups.push({ kind: "series", label: `Also in ${named.name}`, sermons: list });
  }
  return groups;
}
function coverage() {
  const byBook2 = /* @__PURE__ */ new Map();
  for (const sermon of sermons.values()) {
    for (const range of ranges(sermon)) {
      const total = bookByNumber(range.book)?.chapters ?? 0;
      if (!total) continue;
      const entry = byBook2.get(range.book) ?? { sermons: /* @__PURE__ */ new Set(), chapters: /* @__PURE__ */ new Set(), last: null };
      entry.sermons.add(sermon.id);
      for (let chapter = Math.max(1, range.chapterStart); chapter <= Math.min(range.chapterEnd, total); chapter++) entry.chapters.add(chapter);
      if (sermon.datePreached && (!entry.last || sermon.datePreached > entry.last)) entry.last = sermon.datePreached;
      byBook2.set(range.book, entry);
    }
  }
  return BOOKS.filter((book) => byBook2.has(book.number)).map((book) => {
    const entry = byBook2.get(book.number);
    return { book: book.number, sermons: entry.sermons.size, chapters: [...entry.chapters].sort((a, b) => a - b), last: entry.last };
  });
}
function coverageMap(church) {
  const cells = /* @__PURE__ */ new Map();
  for (const sermon of sermons.values()) {
    const tellings = (sermon.preachings ?? []).filter((p) => !church || p.church?.toLowerCase() === church.toLowerCase());
    if (church && tellings.length === 0) continue;
    const last = church ? tellings.map((p) => p.date).sort().pop() ?? null : sermon.datePreached ?? null;
    for (const range of ranges(sermon)) {
      const total = bookByNumber(range.book)?.chapters ?? 0;
      if (!total) continue;
      for (let chapter = Math.max(1, range.chapterStart); chapter <= Math.min(range.chapterEnd, total); chapter++) {
        const key = `${range.book}:${chapter}`;
        const cell = cells.get(key) ?? { book: range.book, chapter, sermons: /* @__PURE__ */ new Map(), last: null };
        cell.sermons.set(sermon.id, { title: sermon.title || "Untitled", last });
        if (last && (!cell.last || last > cell.last)) cell.last = last;
        cells.set(key, cell);
      }
    }
  }
  const planned = [];
  for (const entry of series) {
    if (entry.retired) continue;
    for (const plan of entry.planned ?? []) {
      for (const range of parseReference(plan.passage ?? "")) {
        const total = bookByNumber(range.book)?.chapters ?? 0;
        for (let chapter = Math.max(1, range.chapterStart); chapter <= Math.min(range.chapterEnd, total); chapter++) {
          planned.push({ book: range.book, chapter, series: entry.name, title: plan.title, date: plan.date ?? null });
        }
      }
    }
  }
  const churches = /* @__PURE__ */ new Map();
  for (const sermon of sermons.values()) {
    for (const p of sermon.preachings ?? []) {
      if (!p.church) continue;
      const row = churches.get(p.church.toLowerCase()) ?? { name: p.church, sermonCount: 0, last: "" };
      row.sermonCount += 1;
      if (p.date > row.last) row.last = p.date;
      churches.set(p.church.toLowerCase(), row);
    }
  }
  return {
    cells: [...cells.values()].sort((a, b) => a.book - b.book || a.chapter - b.chapter).map((cell) => ({
      book: cell.book,
      chapter: cell.chapter,
      sermons: cell.sermons.size,
      last: cell.last,
      titles: [...cell.sermons.values()].sort((a, b) => (b.last ?? "").localeCompare(a.last ?? "")).slice(0, 3).map((s) => s.title)
    })),
    planned,
    churches: [...churches.values()].sort((a, b) => b.last.localeCompare(a.last)),
    church
  };
}
const seriesRows = () => series.map((entry) => {
  const own = [...sermons.values()].filter((s) => s.seriesId === entry.id);
  return {
    ...entry,
    planned: clone(entry.planned ?? []),
    retired: entry.retired === true,
    pinned: entry.pinned === true,
    sermonCount: own.length,
    last: own.reduce((latest, s) => s.datePreached && (!latest || s.datePreached > latest) ? s.datePreached : latest, null)
  };
}).sort((a, b) => a.name.localeCompare(b.name));
const tagRows = () => {
  const counts = /* @__PURE__ */ new Map();
  for (const sermon of sermons.values()) for (const tag of sermon.tags) counts.set(tag.toLowerCase(), (counts.get(tag.toLowerCase()) ?? 0) + 1);
  return [...counts.entries()].map(([name, sermonCount]) => ({ name, sermonCount })).sort((a, b) => b.sermonCount - a.sermonCount || a.name.localeCompare(b.name));
};
const illustrationRows = () => illustrations.map((entry) => ({
  ...entry,
  uses: [...sermons.entries()].filter(([, s]) => s.blocks.some((block) => "illustrationId" in block && block.illustrationId === entry.id)).sort(([, a], [, b]) => byDate(a, b)).map(([path, s]) => ({ sermonId: s.id, sermonTitle: s.title, filePath: path, datePreached: s.datePreached }))
}));
const unsubscribe = () => () => void 0;
function printInTab(html) {
  const tab = window.open("", "_blank");
  if (!tab) return;
  tab.document.open();
  tab.document.write(html);
  tab.document.close();
  tab.focus();
  setTimeout(() => tab.print(), 400);
}
const demoApi = {
  getSermonFolder: async () => ({ path: "Demo library, in this browser tab", exists: true }),
  chooseSermonFolder: async () => ({ status: "cancelled" }),
  listCloudFolders: async () => [],
  useCloudFolder: async () => ({ status: "cancelled" }),
  connectCloudFolder: async () => ({ status: "cancelled" }),
  disconnectCloudFolder: async () => ({ status: "cancelled" }),
  getLibraryStatus: async () => ({ sermonCount: sermons.size, failures: [], lastReindexMs: 0 }),
  listSermons: async () => [...sermons.entries()].sort(([, a], [, b]) => byDate(a, b)).map(([path, s]) => summary(s, path)),
  readSermon: async (path) => {
    const sermon = sermons.get(path);
    if (!sermon) throw new Error(`No sermon at ${path}`);
    return clone(sermon);
  },
  createSermon: async (title, options) => {
    const stamp = now();
    const sermon = { id: crypto.randomUUID(), fileVersion: SERMON_FILE_VERSION, title, seriesId: options?.seriesId ?? null, primaryPassage: options?.primaryPassage ?? null, datePreached: null, status: "draft", tags: [], createdAt: stamp, updatedAt: stamp, blocks: [] };
    const path = pathFor(sermon);
    sermons.set(path, sermon);
    changed();
    return { filePath: path, updatedAt: stamp };
  },
  duplicateSermon: async (path) => {
    const original = sermons.get(path);
    if (!original) throw new Error(`No sermon at ${path}`);
    const stamp = now();
    const copy = { ...clone(original), id: crypto.randomUUID(), datePreached: null, status: "draft", createdAt: stamp, updatedAt: stamp };
    const copyPath = pathFor(copy).replace(/\.json$/, `-${copy.id.slice(0, 8)}.json`);
    sermons.set(copyPath, copy);
    changed();
    return { filePath: copyPath, updatedAt: stamp };
  },
  deleteSermon: async (path) => {
    sermons.delete(path);
    changed();
  },
  getLastOpened: async () => FIRST,
  writeSermon: async (sermon, previousPath, options) => {
    const updatedAt = now();
    const written = { ...clone(sermon), updatedAt };
    const path = options?.keepName && previousPath ? previousPath : pathFor(written);
    if (previousPath && previousPath !== path) sermons.delete(previousPath);
    sermons.set(path, written);
    changed();
    return { filePath: path, updatedAt };
  },
  queryLibrary: async (q) => query(q),
  readPassage: async (text) => describeReference(text, appSettings.language),
  relatedSermons: async (sermonId) => related(sermonId),
  coverage: async () => coverage(),
  coverageMap: async (church) => coverageMap(church),
  listSeries: async () => seriesRows(),
  listViews: async () => views.map((view) => ({ ...clone(view), sermonCount: query({ ...view.query, limit: 1e5 }).length })),
  saveViews: async (next) => {
    views = clone(next);
    return views.map((view) => ({ ...clone(view), sermonCount: query({ ...view.query, limit: 1e5 }).length }));
  },
  voiceStatus: async () => ({ ready: false, downloaded: false, loading: false, progress: null, error: "Dictation runs on your own computer, in the app.", size: "76 MB", quality: "quick" }),
  prepareVoice: async () => ({ ready: false, downloaded: false, loading: false, progress: null, error: "Dictation runs on your own computer, in the app.", size: "76 MB", quality: "quick" }),
  onVoiceProgress: () => unsubscribe(),
  transcribe: async () => {
    throw new Error("Transcription runs on your own computer, in the app.");
  },
  chooseRecording: async () => null,
  readRecording: async () => {
    throw new Error("Recordings open in the app.");
  },
  listShapes: async () => clone(shapes),
  saveShapes: async (next) => {
    shapes = clone(next);
    return clone(shapes);
  },
  saveSeries: async (next) => {
    series = next.map((entry) => ({ id: entry.id, name: entry.name, description: entry.description, ...entry.planned?.length ? { planned: clone(entry.planned) } : {}, ...entry.retired ? { retired: true } : {}, ...entry.pinned ? { pinned: true } : {} }));
    changed();
    return seriesRows();
  },
  listTags: async () => tagRows(),
  listChurches: async () => {
    const seen = /* @__PURE__ */ new Map();
    for (const sermon of sermons.values()) {
      for (const telling of sermon.preachings ?? []) {
        if (!telling.church) continue;
        const key = telling.church.toLowerCase();
        const row = seen.get(key) ?? { name: telling.church, sermons: /* @__PURE__ */ new Set(), last: telling.date };
        row.sermons.add(sermon.id);
        if (telling.date > row.last) row.last = telling.date;
        seen.set(key, row);
      }
    }
    return [...seen.values()].map((row) => ({ name: row.name, sermonCount: row.sermons.size, last: row.last })).sort((a, b) => b.last.localeCompare(a.last));
  },
  listOccasions: async () => {
    const seen = /* @__PURE__ */ new Map();
    for (const sermon of sermons.values()) {
      const name = sermon.occasion?.trim();
      if (!name) continue;
      const row = seen.get(name.toLowerCase()) ?? { name, sermonCount: 0 };
      row.sermonCount++;
      seen.set(name.toLowerCase(), row);
    }
    return [...seen.values()].sort((a, b) => b.sermonCount - a.sermonCount || a.name.localeCompare(b.name));
  },
  tagPage: async (tag) => {
    const key = tag.trim().toLowerCase();
    const carrying = [...sermons.values()].filter((sermon) => sermon.tags.some((name) => name.toLowerCase() === key));
    const companions = /* @__PURE__ */ new Map();
    const chapters = /* @__PURE__ */ new Map();
    for (const sermon of carrying) {
      for (const name of sermon.tags) {
        if (name.toLowerCase() === key) continue;
        const row = companions.get(name.toLowerCase()) ?? { name, sermonCount: 0 };
        row.sermonCount++;
        companions.set(name.toLowerCase(), row);
      }
      for (const range of ranges(sermon)) {
        const book = bookByNumber(range.book);
        if (!book) continue;
        for (let chapter = Math.max(1, range.chapterStart); chapter <= Math.min(range.chapterEnd, book.chapters); chapter++) {
          const cell = chapters.get(`${range.book}:${chapter}`) ?? { book: range.book, chapter, label: `${book.name} ${chapter}`, sermons: 0, ids: /* @__PURE__ */ new Set() };
          cell.ids.add(sermon.id);
          chapters.set(`${range.book}:${chapter}`, cell);
        }
      }
    }
    return {
      name: carrying.flatMap((sermon) => sermon.tags).find((name) => name.toLowerCase() === key) ?? tag.trim(),
      sermonCount: carrying.length,
      companions: [...companions.values()].sort((a, b) => b.sermonCount - a.sermonCount || a.name.localeCompare(b.name)),
      chapters: [...chapters.values()].map(({ ids, ...cell }) => ({ ...cell, sermons: ids.size })).sort((a, b) => a.book - b.book || a.chapter - b.chapter)
    };
  },
  promoteTag: async (tag) => {
    const key = tag.trim().toLowerCase();
    let marked = 0;
    for (const sermon of sermons.values()) {
      if (!sermon.tags.some((name) => name.toLowerCase() === key)) continue;
      if (sermon.occasion && sermon.occasion.toLowerCase() !== key) continue;
      sermon.occasion = sermon.tags.find((name) => name.toLowerCase() === key) ?? tag.trim();
      sermon.tags = sermon.tags.filter((name) => name.toLowerCase() !== key);
      marked++;
    }
    tagsFile = forgetInTags(tagsFile, tag);
    changed();
    return marked;
  },
  renameTag: async (from, to) => {
    let count = 0;
    for (const sermon of sermons.values()) {
      if (!sermon.tags.some((tag) => tag.toLowerCase() === from.toLowerCase())) continue;
      const tags2 = sermon.tags.filter((tag) => tag.toLowerCase() !== from.toLowerCase());
      if (!tags2.some((tag) => tag.toLowerCase() === to.toLowerCase())) tags2.push(to);
      sermon.tags = tags2;
      count++;
    }
    tagsFile = renameInTags(tagsFile, from, to);
    changed();
    return count;
  },
  readTags: async () => clone(tagsFile),
  saveTags: async (next) => {
    tagsFile = normaliseTags(next);
    return clone(tagsFile);
  },
  revealSermon: async () => void 0,
  getPodiumSettings: async () => ({ ...podium }),
  setPodiumSettings: async (next) => {
    podium = { ...podium, ...next };
    return { ...podium };
  },
  // The podium fills the window it is in and stays there: a visitor's
  // whole screen is not the page's to take.
  setPodiumMode: async () => void 0,
  exportPdf: async (html) => {
    printInTab(html);
    return { status: "cancelled" };
  },
  printHtml: async (html) => printInTab(html),
  getAppSettings: async () => ({ ...appSettings }),
  setAppSettings: async (next) => {
    appSettings = { ...appSettings, ...next };
    return { ...appSettings };
  },
  listSpellingLanguages: async () => [],
  // The editing commands, as a browser can run them: cut, copy and select
  // all are the page's own; a paste reads the clipboard, with the visitor's
  // leave, and hands it to the editor as a paste.
  edit: async (command) => {
    if (command === "selectAll" || command === "cut" || command === "copy") {
      document.execCommand(command);
      return;
    }
    const target = document.activeElement;
    if (!(target instanceof HTMLElement)) return;
    const transfer = new DataTransfer();
    try {
      if (command === "pastePlain") transfer.setData("text/plain", await navigator.clipboard.readText());
      else {
        for (const item of await navigator.clipboard.read()) {
          for (const type of item.types) {
            if (type === "text/plain" || type === "text/html") transfer.setData(type, await (await item.getType(type)).text());
          }
        }
      }
    } catch {
      return;
    }
    target.dispatchEvent(new ClipboardEvent("paste", { clipboardData: transfer, bubbles: true, cancelable: true }));
  },
  listFonts: async () => ["Palatino Linotype", "Georgia", "Times New Roman", "Garamond", "Calibri", "Arial"],
  listHistory: async () => [],
  readHistory: async () => {
    throw new Error("History lives in your sermon folder, in the app.");
  },
  keepHistory: async () => null,
  getAppInfo: async () => ({ version: "demo", dataPath: "this browser tab" }),
  getEditorSettings: async () => clone(editorSettings),
  setEditorSettings: async (next) => {
    editorSettings = { ...editorSettings, ...next };
    return clone(editorSettings);
  },
  openExported: async () => void 0,
  listIllustrations: async () => illustrationRows(),
  saveIllustrations: async (next) => {
    illustrations = clone(next);
    changed();
    return illustrationRows();
  },
  getLicenseStatus: async () => ({ ...LICENSE }),
  revalidateLicense: async () => ({ ...LICENSE }),
  activateLicense: async () => ({ ...LICENSE }),
  deactivateLicense: async () => ({ ...LICENSE }),
  getUpdateReady: async () => null,
  installUpdate: async () => void 0,
  onUpdateReady: () => unsubscribe(),
  importDocx: async () => ({ status: "cancelled", importedCount: 0, failures: [] }),
  exportMarkdown: async () => ({ status: "cancelled", written: 0, failures: [] }),
  exportDocx: async () => ({ status: "cancelled" }),
  chooseImage: async () => null,
  storeImage: async (bytes, mime) => {
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return `data:${mime};base64,${btoa(binary)}`;
  },
  onContextMenu: (callback) => {
    const listener = (event) => {
      const target = event.target;
      const editable = Boolean(target?.closest('[contenteditable="true"], input, textarea'));
      if (!editable) return;
      event.preventDefault();
      callback({
        x: event.clientX,
        y: event.clientY,
        misspelledWord: "",
        suggestions: [],
        isEditable: true,
        selectionText: window.getSelection()?.toString() ?? "",
        linkURL: target?.closest("a")?.getAttribute("href") ?? "",
        mediaType: target?.closest("img") ? "image" : "none"
      });
    };
    document.addEventListener("contextmenu", listener);
    return () => document.removeEventListener("contextmenu", listener);
  },
  onLibraryChanged: (callback) => {
    libraryListeners.add(callback);
    return () => libraryListeners.delete(callback);
  },
  // No menu bar around the demo: the page is a frame on a web page.
  onMenuCommand: () => unsubscribe(),
  onSermonFileChanged: () => unsubscribe(),
  onLicenseChanged: () => unsubscribe(),
  replaceMisspelling: async () => void 0,
  learnSpelling: async () => false,
  listDictionary: async () => []
};
window.api = demoApi;
document.documentElement.classList.add("demo");
const SCENES = ["library", "map", "write", "outline", "handout", "preach"];
const scene = new URLSearchParams(window.location.search).get("scene") ?? "";
if (SCENES.includes(scene)) document.documentElement.dataset["scene"] = scene;
window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) return;
  const next = event.data?.scene;
  if (typeof next === "string" && SCENES.includes(next)) window.dispatchEvent(new CustomEvent("demo:scene", { detail: next }));
});
if (window.parent !== window) window.parent.postMessage({ demoReady: true }, window.location.origin);
applyThemePreference("system");
let touched = false;
const settle = () => {
  touched = true;
};
window.addEventListener("pointerdown", settle, { once: true, capture: true });
window.addEventListener("keydown", settle, { once: true, capture: true });
document.addEventListener("focusin", (event) => {
  if (!touched && event.target instanceof HTMLElement) event.target.blur();
});
const scrollIntoView = Element.prototype.scrollIntoView;
Element.prototype.scrollIntoView = function(arg) {
  if (touched) scrollIntoView.call(this, arg);
};
const focus = HTMLElement.prototype.focus;
HTMLElement.prototype.focus = function(options) {
  focus.call(this, touched ? options : { ...options, preventScroll: true });
};
const container = document.getElementById("root");
if (!container) throw new Error("Root element missing from demo.html");
clientExports.createRoot(container).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);

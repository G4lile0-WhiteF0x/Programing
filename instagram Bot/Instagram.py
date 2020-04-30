from instapy import InstaPy

session = InstaPy(username="v.vicent3", password="VitorVicente26")
session.login()
session.set_quota_supervisor(enabled=True, sleep_after=["likes", "comments_d"], sleepyhead=True, stochastic_flow=True, notify_me=True,
                              peak_likes_hourly=57,
                              peak_likes_daily=585,
                               peak_comments_hourly=21,
                               peak_comments_daily=182,)

session.like_by_tags(["balneariocamboriu", "linda", "blogueira", "gata", "lindademais"], amount=40)
session.set_do_comment(True, percentage=50)
session.set_comments(["Lindaaa :heart:", "Gata 🔥🔥", "Q deusa 😍😍"])
session.set_dont_like(["kids", "crianca", "bebê", "criancas"])

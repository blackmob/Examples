"use strict";
var Q = require('Q');

export const shows = {
    "paging": {
        "next": "https://api.mixcloud.com/search/?limit=20&offset=20&q=Solid_Steel&type=cloudcast"
    }, 
    "data": [
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/electronic-music/", 
                    "name": "Electronic music", 
                    "key": "/discover/electronic-music/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/folk/", 
                    "name": "Folk", 
                    "key": "/discover/folk/"
                }
            ], 
            "play_count": 10149, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2102015-hour-1-hnny/", 
            "created_time": "2015-10-02T12:15:00Z", 
            "audio_length": 3594, 
            "slug": "solid-steel-radio-show-2102015-hour-1-hnny", 
            "favorite_count": 305, 
            "listener_count": 3793, 
            "name": "Solid Steel Radio Show 2/10/2015 Hour 1 - HNNY", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2102015-hour-1-hnny/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/1/7/e/1/d7fc-b5f7-43e2-b86b-2e6cf02e2f1f.jpg"
            }, 
            "repost_count": 37, 
            "updated_time": "2015-09-30T12:44:37Z", 
            "comment_count": 8
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/hip-hop/", 
                    "name": "Hip hop", 
                    "key": "/discover/hip-hop/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/beats/", 
                    "name": "Beats", 
                    "key": "/discover/beats/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic/", 
                    "name": "Electronic", 
                    "key": "/discover/electronic/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }
            ], 
            "play_count": 10155, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2132014-part-3-4-werkha/", 
            "created_time": "2014-03-21T15:04:07Z", 
            "audio_length": 3684, 
            "slug": "solid-steel-radio-show-2132014-part-3-4-werkha", 
            "favorite_count": 231, 
            "listener_count": 3394, 
            "name": "Solid Steel Radio Show 21/3/2014 Part 3 + 4 - Werkha", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2132014-part-3-4-werkha/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
            }, 
            "repost_count": 12, 
            "updated_time": "2014-03-21T15:04:07Z", 
            "comment_count": 8
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/hip-hop/", 
                    "name": "Hip hop", 
                    "key": "/discover/hip-hop/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/funk/", 
                    "name": "Funk", 
                    "key": "/discover/funk/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/rap/", 
                    "name": "Rap", 
                    "key": "/discover/rap/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }
            ], 
            "play_count": 7787, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2542014-part-1-2-dj-moneyshot/", 
            "created_time": "2014-04-25T14:16:53Z", 
            "audio_length": 3661, 
            "slug": "solid-steel-radio-show-2542014-part-1-2-dj-moneyshot", 
            "favorite_count": 278, 
            "listener_count": 2809, 
            "name": "Solid Steel Radio Show 25/4/2014 Part 1 + 2 - DJ Moneyshot", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2542014-part-1-2-dj-moneyshot/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/1/3/0/0/5d9d-8689-45ae-896a-bac068e1f9e0.jpg"
            }, 
            "repost_count": 8, 
            "updated_time": "2014-04-25T14:16:53Z", 
            "comment_count": 6
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/hip-hop/", 
                    "name": "Hip hop", 
                    "key": "/discover/hip-hop/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/beats/", 
                    "name": "Beats", 
                    "key": "/discover/beats/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic-music/", 
                    "name": "Electronic music", 
                    "key": "/discover/electronic-music/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }
            ], 
            "play_count": 8076, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-6112015-hour-1-jungle/", 
            "created_time": "2015-11-06T13:15:00Z", 
            "audio_length": 3046, 
            "slug": "solid-steel-radio-show-6112015-hour-1-jungle", 
            "favorite_count": 210, 
            "listener_count": 2712, 
            "name": "Solid Steel Radio Show 6/11/2015 Hour 1 - Jungle", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-6112015-hour-1-jungle/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/9/e/c/8/7f37-5e67-466c-a3ac-c21c982ace91.jpg"
            }, 
            "repost_count": 32, 
            "updated_time": "2015-11-05T10:06:06Z", 
            "comment_count": 7
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/house/", 
                    "name": "House", 
                    "key": "/discover/house/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic/", 
                    "name": "Electronic", 
                    "key": "/discover/electronic/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/beats/", 
                    "name": "Beats", 
                    "key": "/discover/beats/"
                }
            ], 
            "play_count": 5748, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2832014-part-3-4-maribou-state/", 
            "created_time": "2014-03-28T15:58:58Z", 
            "audio_length": 2613, 
            "slug": "solid-steel-radio-show-2832014-part-3-4-maribou-state", 
            "favorite_count": 154, 
            "listener_count": 2095, 
            "name": "Solid Steel Radio Show 28/3/2014 Part 3 + 4 - Maribou State", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2832014-part-3-4-maribou-state/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/9/a/b/2/9955-e33e-416d-9126-4c7664f4f859.jpg"
            }, 
            "repost_count": 13, 
            "updated_time": "2014-03-28T15:58:59Z", 
            "comment_count": 6
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/funk/", 
                    "name": "Funk", 
                    "key": "/discover/funk/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/reggae/", 
                    "name": "Reggae", 
                    "key": "/discover/reggae/"
                }
            ], 
            "play_count": 5380, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2542014-part-3-4-trusme/", 
            "created_time": "2014-04-25T14:45:44Z", 
            "audio_length": 3730, 
            "slug": "solid-steel-radio-show-2542014-part-3-4-trusme", 
            "favorite_count": 133, 
            "listener_count": 1985, 
            "name": "Solid Steel Radio Show 25/4/2014 Part 3 + 4 - Trus'me", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2542014-part-3-4-trusme/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/6/2/0/f/3a88-fc91-4c53-91f1-c32d4a067e79.jpg"
            }, 
            "repost_count": 5, 
            "updated_time": "2014-04-25T14:45:44Z", 
            "comment_count": 4
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/reggae/", 
                    "name": "Reggae", 
                    "key": "/discover/reggae/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/dub/", 
                    "name": "Dub", 
                    "key": "/discover/dub/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic/", 
                    "name": "Electronic", 
                    "key": "/discover/electronic/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/ambient/", 
                    "name": "Ambient", 
                    "key": "/discover/ambient/"
                }
            ], 
            "play_count": 4850, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-3082013-part-1-2-coldcut/", 
            "created_time": "2013-08-30T11:53:40Z", 
            "audio_length": 3001, 
            "slug": "solid-steel-radio-show-3082013-part-1-2-coldcut", 
            "favorite_count": 234, 
            "listener_count": 1768, 
            "name": "Solid Steel Radio Show 30/8/2013 Part 1 + 2 - Coldcut", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-3082013-part-1-2-coldcut/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/2/0/8/b/a4d1-2080-44c3-a695-e7aec765eb95.jpeg"
            }, 
            "repost_count": 13, 
            "updated_time": "2013-10-21T18:14:01Z", 
            "comment_count": 14
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/beats/", 
                    "name": "Beats", 
                    "key": "/discover/beats/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/hip-hop/", 
                    "name": "Hip hop", 
                    "key": "/discover/hip-hop/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/reggae/", 
                    "name": "Reggae", 
                    "key": "/discover/reggae/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/rap/", 
                    "name": "Rap", 
                    "key": "/discover/rap/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/dancehall/", 
                    "name": "Dancehall", 
                    "key": "/discover/dancehall/"
                }
            ], 
            "play_count": 4194, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-1362014-part-3-4-dj-vadim/", 
            "created_time": "2014-06-13T19:28:57Z", 
            "audio_length": 5439, 
            "slug": "solid-steel-radio-show-1362014-part-3-4-dj-vadim", 
            "favorite_count": 277, 
            "listener_count": 1714, 
            "name": "Solid Steel Radio Show 13/6/2014 Part 3 + 4 - DJ Vadim", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-1362014-part-3-4-dj-vadim/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/1/9/e/4/0514-e094-4c97-b2b9-41cad6166e61.jpg"
            }, 
            "repost_count": 8, 
            "updated_time": "2014-06-13T19:28:33Z", 
            "comment_count": 6
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/disco/", 
                    "name": "Disco", 
                    "key": "/discover/disco/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/boogie/", 
                    "name": "Boogie", 
                    "key": "/discover/boogie/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/house-music/", 
                    "name": "House music", 
                    "key": "/discover/house-music/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }
            ], 
            "play_count": 3926, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-31102014-part-1-2-motor-city-drum-ensemble/", 
            "created_time": "2014-10-31T12:30:00Z", 
            "audio_length": 3478, 
            "slug": "solid-steel-radio-show-31102014-part-1-2-motor-city-drum-ensemble", 
            "favorite_count": 140, 
            "listener_count": 1454, 
            "name": "Solid Steel Radio Show 31/10/2014 Part 1 + 2 - Motor City Drum Ensemble", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-31102014-part-1-2-motor-city-drum-ensemble/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/5/2/5/2/75f5-478e-494d-9be4-8316476a478b.jpg"
            }, 
            "repost_count": 28, 
            "updated_time": "2014-10-29T22:10:25Z", 
            "comment_count": 9
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/funk/", 
                    "name": "Funk", 
                    "key": "/discover/funk/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic/", 
                    "name": "Electronic", 
                    "key": "/discover/electronic/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/library/", 
                    "name": "Library", 
                    "key": "/discover/library/"
                }
            ], 
            "play_count": 3854, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2122014-part-3-4-lefto/", 
            "created_time": "2014-02-21T14:01:57Z", 
            "audio_length": 3551, 
            "slug": "solid-steel-radio-show-2122014-part-3-4-lefto", 
            "favorite_count": 89, 
            "listener_count": 1361, 
            "name": "Solid Steel Radio Show 21/2/2014 Part 3 + 4 - LeFtO", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2122014-part-3-4-lefto/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/5/d/2/d/aab6-4ffd-42ee-bcc7-c1c4eb001348.png"
            }, 
            "repost_count": 4, 
            "updated_time": "2014-02-21T14:01:57Z", 
            "comment_count": 2
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/beats/", 
                    "name": "Beats", 
                    "key": "/discover/beats/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/future-beats/", 
                    "name": "Future Beats", 
                    "key": "/discover/future-beats/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic/", 
                    "name": "Electronic", 
                    "key": "/discover/electronic/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/hip-hop/", 
                    "name": "Hip hop", 
                    "key": "/discover/hip-hop/"
                }
            ], 
            "play_count": 3309, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-3012015-part-1-2-beat-spacek-x-kutmah/", 
            "created_time": "2015-01-30T12:15:00Z", 
            "audio_length": 4234, 
            "slug": "solid-steel-radio-show-3012015-part-1-2-beat-spacek-x-kutmah", 
            "favorite_count": 113, 
            "listener_count": 1254, 
            "name": "Solid Steel Radio Show 30/1/2015 Part 1 + 2 - Beat Spacek x Kutmah", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-3012015-part-1-2-beat-spacek-x-kutmah/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/2/7/e/1/6d78-19f1-4321-ba1a-0b96cdf43adf.jpg"
            }, 
            "repost_count": 23, 
            "updated_time": "2015-01-29T23:32:27Z", 
            "comment_count": 8
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/beats/", 
                    "name": "Beats", 
                    "key": "/discover/beats/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electornic/", 
                    "name": "Electornic", 
                    "key": "/discover/electornic/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/african/", 
                    "name": "African", 
                    "key": "/discover/african/"
                }
            ], 
            "play_count": 3836, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-442014-part-3-4-mo-kolours/", 
            "created_time": "2014-04-04T12:42:34Z", 
            "audio_length": 3633, 
            "slug": "solid-steel-radio-show-442014-part-3-4-mo-kolours", 
            "favorite_count": 87, 
            "listener_count": 1418, 
            "name": "Solid Steel Radio Show 4/4/2014 Part 3 + 4 - Mo Kolours", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-442014-part-3-4-mo-kolours/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/9/a/6/c/b7e2-7823-45eb-97ef-51b314878ff4.jpg"
            }, 
            "repost_count": 3, 
            "updated_time": "2014-04-04T12:42:34Z", 
            "comment_count": 1
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/world/", 
                    "name": "World", 
                    "key": "/discover/world/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic/", 
                    "name": "Electronic", 
                    "key": "/discover/electronic/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/new-age/", 
                    "name": "New age", 
                    "key": "/discover/new-age/"
                }
            ], 
            "play_count": 3518, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-152015-hour-1-four-tet/", 
            "created_time": "2015-05-01T11:09:55Z", 
            "audio_length": 3695, 
            "slug": "solid-steel-radio-show-152015-hour-1-four-tet", 
            "favorite_count": 128, 
            "listener_count": 1305, 
            "name": "Solid Steel Radio Show 1/5/2015 Hour 1 - Four Tet", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-152015-hour-1-four-tet/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/3/4/1/8/70ab-b262-41f8-8b04-bd4c9817b475.jpg"
            }, 
            "repost_count": 19, 
            "updated_time": "2015-04-30T17:12:48Z", 
            "comment_count": 6
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/solidsteel/", 
                    "name": "Solidsteel", 
                    "key": "/discover/solidsteel/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/coldcut/", 
                    "name": "Coldcut", 
                    "key": "/discover/coldcut/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/ninja-tune/", 
                    "name": "Ninja tune", 
                    "key": "/discover/ninja-tune/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/old-school/", 
                    "name": "Old school", 
                    "key": "/discover/old-school/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/dub/", 
                    "name": "Dub", 
                    "key": "/discover/dub/"
                }
            ], 
            "play_count": 4336, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/coldcut-meets-the-orb-part-1-2/", 
            "created_time": "2013-01-11T11:04:20Z", 
            "audio_length": 4281, 
            "slug": "coldcut-meets-the-orb-part-1-2", 
            "favorite_count": 345, 
            "listener_count": 1423, 
            "name": "Coldcut meets The Orb - Part 1 + 2", 
            "url": "https://www.mixcloud.com/Solid_Steel/coldcut-meets-the-orb-part-1-2/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/1/0/a/9/d2f0-5fba-4a5a-a6f0-825f08827c93.jpeg"
            }, 
            "repost_count": 32, 
            "updated_time": "2013-10-18T23:54:45Z", 
            "comment_count": 14
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/house-music/", 
                    "name": "House music", 
                    "key": "/discover/house-music/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/hip-hop/", 
                    "name": "Hip hop", 
                    "key": "/discover/hip-hop/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic-music/", 
                    "name": "Electronic music", 
                    "key": "/discover/electronic-music/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/jungle/", 
                    "name": "Jungle", 
                    "key": "/discover/jungle/"
                }
            ], 
            "play_count": 3607, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-13112015-hour-1-coldcut-dk-essential-mix-september-2015/", 
            "created_time": "2015-11-13T13:15:00Z", 
            "audio_length": 3536, 
            "slug": "solid-steel-radio-show-13112015-hour-1-coldcut-dk-essential-mix-september-2015", 
            "favorite_count": 138, 
            "listener_count": 1472, 
            "name": "Solid Steel Radio Show 13/11/2015 Hour 1 - Coldcut + DK 'Essential Mix' September 2015", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-13112015-hour-1-coldcut-dk-essential-mix-september-2015/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/b/2/0/b/639c-efb6-4471-9e8e-16b4ea4a2dd2.jpg"
            }, 
            "repost_count": 31, 
            "updated_time": "2015-11-13T07:51:54Z", 
            "comment_count": 7
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/pop/", 
                    "name": "Pop", 
                    "key": "/discover/pop/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/80s/", 
                    "name": "80s", 
                    "key": "/discover/80s/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic/", 
                    "name": "Electronic", 
                    "key": "/discover/electronic/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/edits/", 
                    "name": "Edits", 
                    "key": "/discover/edits/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/disco/", 
                    "name": "Disco", 
                    "key": "/discover/disco/"
                }
            ], 
            "play_count": 4364, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-1652014-part-3-4-dj-food/", 
            "created_time": "2014-05-16T12:52:11Z", 
            "audio_length": 3580, 
            "slug": "solid-steel-radio-show-1652014-part-3-4-dj-food", 
            "favorite_count": 148, 
            "listener_count": 1362, 
            "name": "Solid Steel Radio Show 16/5/2014 Part 3 + 4 - DJ Food", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-1652014-part-3-4-dj-food/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/f/9/4/8/784b-bd3b-4710-9a95-4d59eb96e53e.jpg"
            }, 
            "repost_count": 4, 
            "updated_time": "2014-05-16T12:52:11Z", 
            "comment_count": 9
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/jazz/", 
                    "name": "Jazz", 
                    "key": "/discover/jazz/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/house/", 
                    "name": "House", 
                    "key": "/discover/house/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/techno/", 
                    "name": "Techno", 
                    "key": "/discover/techno/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/world/", 
                    "name": "World", 
                    "key": "/discover/world/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronica/", 
                    "name": "Electronica", 
                    "key": "/discover/electronica/"
                }
            ], 
            "play_count": 3663, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2442015-hour-1-caribou/", 
            "created_time": "2015-04-24T11:15:00Z", 
            "audio_length": 3547, 
            "slug": "solid-steel-radio-show-2442015-hour-1-caribou", 
            "favorite_count": 104, 
            "listener_count": 1273, 
            "name": "Solid Steel Radio Show 24/4/2015 Hour 1 - Caribou", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2442015-hour-1-caribou/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/d/0/c/c/4380-58dd-4661-8564-edb15e4aba95.jpg"
            }, 
            "repost_count": 17, 
            "updated_time": "2015-04-23T09:56:39Z", 
            "comment_count": 5
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/disco/", 
                    "name": "Disco", 
                    "key": "/discover/disco/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electro/", 
                    "name": "Electro", 
                    "key": "/discover/electro/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/funk/", 
                    "name": "Funk", 
                    "key": "/discover/funk/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/soul/", 
                    "name": "Soul", 
                    "key": "/discover/soul/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/house/", 
                    "name": "House", 
                    "key": "/discover/house/"
                }
            ], 
            "play_count": 2898, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2282014-part-1-2-horse-meat-disco/", 
            "created_time": "2014-08-22T10:00:00Z", 
            "audio_length": 3651, 
            "slug": "solid-steel-radio-show-2282014-part-1-2-horse-meat-disco", 
            "favorite_count": 101, 
            "listener_count": 1121, 
            "name": "Solid Steel Radio Show 22/8/2014 Part 1 + 2 - Horse Meat Disco", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2282014-part-1-2-horse-meat-disco/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/1/e/d/e/7b67-cdb1-4a5a-8553-b4d26a290ae1.jpg"
            }, 
            "repost_count": 9, 
            "updated_time": "2014-08-14T08:54:58Z", 
            "comment_count": 0
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/house-music/", 
                    "name": "House music", 
                    "key": "/discover/house-music/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/techno/", 
                    "name": "Techno", 
                    "key": "/discover/techno/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/electronic-music/", 
                    "name": "Electronic music", 
                    "key": "/discover/electronic-music/"
                }
            ], 
            "play_count": 2513, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-2182015-hour-1-velvit/", 
            "created_time": "2015-08-21T12:31:19Z", 
            "audio_length": 4964, 
            "slug": "solid-steel-radio-show-2182015-hour-1-velvit", 
            "favorite_count": 85, 
            "listener_count": 1077, 
            "name": "Solid Steel Radio Show 21/8/2015 Hour 1 - Velvit", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-2182015-hour-1-velvit/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/5/8/4/b/8df6-cb05-46a6-aa31-592bc73e2826.jpg"
            }, 
            "repost_count": 17, 
            "updated_time": "2015-08-20T19:31:08Z", 
            "comment_count": 0
        }, 
        {
            "tags": [
                {
                    "url": "https://www.mixcloud.com/discover/hip-hop/", 
                    "name": "Hip hop", 
                    "key": "/discover/hip-hop/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/acid-house/", 
                    "name": "Acid House", 
                    "key": "/discover/acid-house/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/disco/", 
                    "name": "Disco", 
                    "key": "/discover/disco/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/drum-bass/", 
                    "name": "Drum & Bass", 
                    "key": "/discover/drum-bass/"
                }, 
                {
                    "url": "https://www.mixcloud.com/discover/house/", 
                    "name": "House", 
                    "key": "/discover/house/"
                }
            ], 
            "play_count": 2996, 
            "user": {
                "url": "https://www.mixcloud.com/Solid_Steel/", 
                "username": "Solid_Steel", 
                "name": "Solid Steel", 
                "key": "/Solid_Steel/", 
                "pictures": {
                    "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg", 
                    "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/e/5/8/3/ad3b-3646-46d6-8fa8-0223ef20b28e.jpg"
                }
            }, 
            "key": "/Solid_Steel/solid-steel-radio-show-1142014-part-3-4-lexis/", 
            "created_time": "2014-04-11T12:33:55Z", 
            "audio_length": 4806, 
            "slug": "solid-steel-radio-show-1142014-part-3-4-lexis", 
            "favorite_count": 66, 
            "listener_count": 979, 
            "name": "Solid Steel Radio Show 11/4/2014 Part 3 + 4 - Lexis", 
            "url": "https://www.mixcloud.com/Solid_Steel/solid-steel-radio-show-1142014-part-3-4-lexis/", 
            "pictures": {
                "medium": "https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "768wx768h": "https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "320wx320h": "https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "extra_large": "https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "large": "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "640wx640h": "https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "medium_mobile": "https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "small": "https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "1024wx1024h": "https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg", 
                "thumbnail": "https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/5/a/b/0/9f6c-5e05-42af-898d-6e4a51b25743.jpg"
            }, 
            "repost_count": 0, 
            "updated_time": "2014-04-11T12:33:56Z", 
            "comment_count": 4
        }
    ]
}as any as CloudCastResult

export const face = [{"faceRectangle":{"height":70,"left":205,"top":91,"width":70},"scores":{"anger":0.173771173,"contempt":0.0200356748,"disgust":0.07842504,"fear":0.000347262365,"happiness":0.00150466466,"neutral":0.7040029,"sadness":0.0175974444,"surprise":0.004315846}}] as Face[];

export class DataService implements IDataService{

    constructor() {
    }
 
    public getShows = (url : string): Promise<CloudCastResult> => { 
            return Q.resolve(shows);
    }
    
    public getEmotions = (url : string): Promise<Face[]> => {
            return Q.resolve(face);
    }    

}
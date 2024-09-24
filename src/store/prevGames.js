const prevGames = [
    {
        game: 1,
        day: "Sun, Feb 11"
    },
    {
        game: 2,
        day: "Mon, Feb 12"
    },
    {
        game: 3,
        day: "Tue, Feb 13"
    },
    {
        game: 4,
        day: "Wed, Feb 14"
    },
    {
        game: 5,
        day: "Thu, Feb 15"
    },
    {
        game: 6,
        day: "Fri, Feb 16"
    },
    {
        game: 7,
        day: "Sat, Feb 17"
    },
    {
        game: 8,
        day: "Sun, Feb 18"
    },
    {
        game: 9,
        day: "Mon, Feb 19"
    },
    {
        game: 10,
        day: "Tue, Feb 20"
    },
    {
        game: 11,
        day: "Wed, Feb 21"
    },
    {
        game: 12,
        day: "Thu, Feb 22"
    },
    {
        game: 13,
        day: "Fri, Feb 23"
    },
    {
        game: 14,
        day: "Sat, Feb 24"
    },
    {
        game: 15,
        day: "Sun, Feb 25"
    },
    {
        game: 16,
        day: "Mon, Feb 26"
    },
    {
        game: 17,
        day: "Tue, Feb 27"
    },
    {
        game: 18,
        day: "Wed, Feb 28"
    },
    {
        game: 19,
        day: "Thu, Feb 29"
    },
    {
        game: 20,
        day: "Fri, Mar 1"
    },
    {
        game: 21,
        day: "Sat, Mar 2"
    },
    {
        game: 22,
        day: "Sun, Mar 3"
    },
    {
        game: 23,
        day: "Mon, Mar 4"
    },
    {
        game: 24,
        day: "Tue, Mar 5"
    },
    {
        game: 25,
        day: "Wed, Mar 6"
    },
    {
        game: 26,
        day: "Thu, Mar 7"
    },
    {
        game: 27,
        day: "Fri, Mar 8"
    },
    {
        game: 28,
        day: "Sat, Mar 9"
    },
    {
        game: 29,
        day: "Sun, Mar 10"
    },
    {
        game: 30,
        day: "Mon, Mar 11"
    },
    {
        game: 31,
        day: "Tue, Mar 12"
    },
    {
        game: 32,
        day: "Wed, Mar 13"
    },
    {
        game: 33,
        day: "Thu, Mar 14"
    },
    {
        game: 34,
        day: "Fri, Mar 15"
    },
    {
        game: 35,
        day: "Sat, Mar 16"
    },
    {
        game: 36,
        day: "Sun, Mar 17"
    },
    {
        game: 37,
        day: "Mon, Mar 18"
    },
    {
        game: 38,
        day: "Tue, Mar 19"
    },
    {
        game: 39,
        day: "Wed, Mar 20"
    },
    {
        game: 40,
        day: "Thu, Mar 21"
    },
    {
        game: 41,
        day: "Fri, Mar 22"
    },
    {
        game: 42,
        day: "Sat, Mar 23"
    },
    {
        game: 43,
        day: "Sun, Mar 24"
    },
    {
        game: 44,
        day: "Mon, Mar 25"
    },
    {
        game: 45,
        day: "Tue, Mar 26"
    },
    {
        game: 46,
        day: "Wed, Mar 27"
    },
    {
        game: 47,
        day: "Thu, Mar 28"
    },
    {
        game: 48,
        day: "Fri, Mar 29"
    },
    {
        game: 49,
        day: "Sat, Mar 30"
    },
    {
        game: 50,
        day: "Sun, Mar 31"
    },
    {
        game: 51,
        day: "Mon, Apr 1"
    },
    {
        game: 52,
        day: "Tue, Apr 2"
    },
    {
        game: 53,
        day: "Wed, Apr 3"
    },
    {
        game: 54,
        day: "Thu, Apr 4"
    },
    {
        game: 55,
        day: "Fri, Apr 5"
    },
    {
        game: 56,
        day: "Sat, Apr 6"
    },
    {
        game: 57,
        day: "Sun, Apr 7"
    },
    {
        game: 58,
        day: "Mon, Apr 8"
    },
    {
        game: 59,
        day: "Tue, Apr 9"
    },
    {
        game: 60,
        day: "Wed, Apr 10"
    },
    {
        game: 61,
        day: "Thu, Apr 11"
    },
    {
        game: 62,
        day: "Fri, Apr 12"
    },
    {
        game: 63,
        day: "Sat, Apr 13"
    },
    {
        game: 64,
        day: "Sun, Apr 14"
    },
    {
        game: 65,
        day: "Mon, Apr 15"
    },
    {
        game: 66,
        day: "Tue, Apr 16"
    },
    {
        game: 67,
        day: "Wed, Apr 17"
    },
    {
        game: 68,
        day: "Thu, Apr 18"
    },
    {
        game: 69,
        day: "Fri, Apr 19"
    },
    {
        game: 70,
        day: "Sat, Apr 20"
    },
    {
        game: 71,
        day: "Sun, Apr 21"
    },
    {
        game: 72,
        day: "Mon, Apr 22"
    },
    {
        game: 73,
        day: "Tue, Apr 23"
    },
    {
        game: 74,
        day: "Wed, Apr 24"
    },
    {
        game: 75,
        day: "Thu, Apr 25"
    },
    {
        game: 76,
        day: "Fri, Apr 26"
    },
    {
        game: 77,
        day: "Sat, Apr 27"
    },
    {
        game: 78,
        day: "Sun, Apr 28"
    },
    {
        game: 79,
        day: "Mon, Apr 29"
    },
    {
        game: 80,
        day: "Tue, Apr 30"
    },
    {
        game: 81,
        day: "Wed, May 1"
    },
    {
        game: 82,
        day: "Thu, May 2"
    },
    {
        game: 83,
        day: "Fri, May 3"
    },
    {
        game: 84,
        day: "Sat, May 4"
    },
    {
        game: 85,
        day: "Sun, May 5"
    },
    {
        game: 86,
        day: "Mon, May 6"
    },
    {
        game: 87,
        day: "Tue, May 7"
    },
    {
        game: 88,
        day: "Wed, May 8"
    },
    {
        game: 89,
        day: "Thu, May 9"
    },
    {
        game: 90,
        day: "Fri, May 10"
    },
    {
        game: 91,
        day: "Sat, May 11"
    },
    {
        game: 92,
        day: "Sun, May 12"
    },
    {
        game: 93,
        day: "Mon, May 13"
    },
    {
        game: 94,
        day: "Tue, May 14"
    },
    {
        game: 95,
        day: "Wed, May 15"
    },
    {
        game: 96,
        day: "Thu, May 16"
    },
    {
        game: 97,
        day: "Fri, May 17"
    },
    {
        game: 98,
        day: "Sat, May 18"
    },
    {
        game: 99,
        day: "Sun, May 19"
    },
    {
        game: 100,
        day: "Mon, May 20"
    },
    {
        game: 101,
        day: "Tue, May 21"
    },
    {
        game: 102,
        day: "Wed, May 22"
    },
    {
        game: 103,
        day: "Thu, May 23"
    },
    {
        game: 104,
        day: "Fri, May 24"
    },
    {
        game: 105,
        day: "Sat, May 25"
    },
    {
        game: 106,
        day: "Sun, May 26"
    },
    {
        game: 107,
        day: "Mon, May 27"
    },
    {
        game: 108,
        day: "Tue, May 28"
    },
    {
        game: 109,
        day: "Wed, May 29"
    },
    {
        game: 110,
        day: "Thu, May 30"
    },
    {
        game: 111,
        day: "Fri, May 31"
    },
    {
        game: 112,
        day: "Sat, Jun 1"
    },
    {
        game: 113,
        day: "Sun, Jun 2"
    },
    {
        game: 114,
        day: "Mon, Jun 3"
    },
    {
        game: 115,
        day: "Tue, Jun 4"
    },
    {
        game: 116,
        day: "Wed, Jun 5"
    },
    {
        game: 117,
        day: "Thu, Jun 6"
    },
    {
        game: 118,
        day: "Fri, Jun 7"
    },
    {
        game: 119,
        day: "Sat, Jun 8"
    },
    {
        game: 120,
        day: "Sun, Jun 9"
    },
    {
        game: 121,
        day: "Mon, Jun 10"
    },
    {
        game: 122,
        day: "Tue, Jun 11"
    },
    {
        game: 123,
        day: "Wed, Jun 12"
    },
    {
        game: 124,
        day: "Thu, Jun 13"
    },
    {
        game: 125,
        day: "Fri, Jun 14"
    },
    {
        game: 126,
        day: "Sat, Jun 15"
    },
    {
        game: 127,
        day: "Sun, Jun 16"
    },
    {
        game: 128,
        day: "Mon, Jun 17"
    },
    {
        game: 129,
        day: "Tue, Jun 18"
    },
    {
        game: 130,
        day: "Wed, Jun 19"
    },
    {
        game: 131,
        day: "Thu, Jun 20"
    },
    {
        game: 132,
        day: "Fri, Jun 21"
    },
    {
        game: 133,
        day: "Sat, Jun 22"
    },
    {
        game: 134,
        day: "Sun, Jun 23"
    },
    {
        game: 135,
        day: "Mon, Jun 24"
    },
    {
        game: 136,
        day: "Tue, Jun 25"
    },
    {
        game: 137,
        day: "Wed, Jun 26"
    },
    {
        game: 138,
        day: "Thu, Jun 27"
    },
    {
        game: 139,
        day: "Fri, Jun 28"
    },
    {
        game: 140,
        day: "Sat, Jun 29"
    },
    {
        game: 141,
        day: "Sun, Jun 30"
    },
    {
        game: 142,
        day: "Mon, Jul 1"
    },
    {
        game: 143,
        day: "Tue, Jul 2"
    },
    {
        game: 144,
        day: "Wed, Jul 3"
    },
    {
        game: 145,
        day: "Thu, Jul 4"
    },
    {
        game: 146,
        day: "Fri, Jul 5"
    },
    {
        game: 147,
        day: "Sat, Jul 6"
    },
    {
        game: 148,
        day: "Sun, Jul 7"
    },
    {
        game: 149,
        day: "Mon, Jul 8"
    },
    {
        game: 150,
        day: "Tue, Jul 9"
    },
    {
        game: 151,
        day: "Wed, Jul 10"
    },
    {
        game: 152,
        day: "Thu, Jul 11"
    },
    {
        game: 153,
        day: "Fri, Jul 12"
    },
    {
        game: 154,
        day: "Sat, Jul 13"
    },
    {
        game: 155,
        day: "Sun, Jul 14"
    },
    {
        game: 156,
        day: "Mon, Jul 15"
    },
    {
        game: 157,
        day: "Tue, Jul 16"
    },
    {
        game: 158,
        day: "Wed, Jul 17"
    },
    {
        game: 159,
        day: "Thu, Jul 18"
    },
    {
        game: 160,
        day: "Fri, Jul 19"
    },
    {
        game: 161,
        day: "Sat, Jul 20"
    },
    {
        game: 162,
        day: "Sun, Jul 21"
    },
    {
        game: 163,
        day: "Mon, Jul 22"
    },
    {
        game: 164,
        day: "Tue, Jul 23"
    },
    {
        game: 165,
        day: "Wed, Jul 24"
    },
    {
        game: 166,
        day: "Thu, Jul 25"
    },
    {
        game: 167,
        day: "Fri, Jul 26"
    },
    {
        game: 168,
        day: "Sat, Jul 27"
    },
    {
        game: 169,
        day: "Sun, Jul 28"
    },
    {
        game: 170,
        day: "Mon, Jul 29"
    },
    {
        game: 171,
        day: "Tue, Jul 30"
    },
    {
        game: 172,
        day: "Wed, Jul 31"
    },
    {
        game: 173,
        day: "Thu, Aug 1"
    },
    {
        game: 174,
        day: "Fri, Aug 2"
    },
    {
        game: 175,
        day: "Sat, Aug 3"
    },
    {
        game: 176,
        day: "Sun, Aug 4"
    },
    {
        game: 177,
        day: "Mon, Aug 5"
    },
    {
        game: 178,
        day: "Tue, Aug 6"
    },
    {
        game: 179,
        day: "Wed, Aug 7"
    },
    {
        game: 180,
        day: "Thu, Aug 8"
    },
    {
        game: 181,
        day: "Fri, Aug 9"
    },
    {
        game: 182,
        day: "Sat, Aug 10"
    },
    {
        game: 183,
        day: "Sun, Aug 11"
    },
    {
        game: 184,
        day: "Mon, Aug 12"
    },
    {
        game: 185,
        day: "Tue, Aug 13"
    },
    {
        game: 186,
        day: "Wed, Aug 14"
    },
    {
        game: 187,
        day: "Thu, Aug 15"
    },
    {
        game: 188,
        day: "Fri, Aug 16"
    },
    {
        game: 189,
        day: "Sat, Aug 17"
    },
    {
        game: 190,
        day: "Sun, Aug 18"
    },
    {
        game: 191,
        day: "Mon, Aug 19"
    },
    {
        game: 192,
        day: "Tue, Aug 20"
    },
    {
        game: 193,
        day: "Wed, Aug 21"
    },
    {
        game: 194,
        day: "Thu, Aug 22"
    },
    {
        game: 195,
        day: "Fri, Aug 23"
    },
    {
        game: 196,
        day: "Sat, Aug 24"
    },
    {
        game: 197,
        day: "Sun, Aug 25"
    },
    {
        game: 198,
        day: "Mon, Aug 26"
    },
    {
        game: 199,
        day: "Tue, Aug 27"
    },
    {
        game: 200,
        day: "Wed, Aug 28"
    },
    {
        game: 201,
        day: "Thu, Aug 29"
    },
    {
        game: 202,
        day: "Fri, Aug 30"
    },
    {
        game: 203,
        day: "Sat, Aug 31"
    },
    {
        game: 204,
        day: "Sun, Sep 1"
    },
    {
        game: 205,
        day: "Mon, Sep 2"
    },
    {
        game: 206,
        day: "Tue, Sep 3"
    },
    {
        game: 207,
        day: "Wed, Sep 4"
    },
    {
        game: 208,
        day: "Thu, Sep 5"
    },
    {
        game: 209,
        day: "Fri, Sep 6"
    },
    {
        game: 210,
        day: "Sat, Sep 7"
    },
    {
        game: 211,
        day: "Sun, Sep 8"
    },
    {
        game: 212,
        day: "Mon, Sep 9"
    },
    {
        game: 213,
        day: "Tue, Sep 10"
    },
    {
        game: 214,
        day: "Wed, Sep 11"
    },
    {
        game: 215,
        day: "Thu, Sep 12"
    },
    {
        game: 216,
        day: "Fri, Sep 13"
    },
    {
        game: 217,
        day: "Sat, Sep 14"
    },
    {
        game: 218,
        day: "Sun, Sep 15"
    },
    {
        game: 219,
        day: "Mon, Sep 16"
    },
    {
        game: 220,
        day: "Tue, Sep 17"
    },
    {
        game: 221,
        day: "Wed, Sep 18"
    },
    {
        game: 222,
        day: "Thu, Sep 19"
    },
    {
        game: 223,
        day: "Fri, Sep 20"
    },
    {
        game: 224,
        day: "Sat, Sep 21"
    },
    {
        game: 225,
        day: "Sun, Sep 22"
    },
    {
        game: 226,
        day: "Mon, Sep 23"
    },
    {
        game: 227,
        day: "Tue, Sep 24"
    },
    {
        game: 228,
        day: "Wed, Sep 25"
    },
    {
        game: 229,
        day: "Thu, Sep 26"
    },
    {
        game: 230,
        day: "Fri, Sep 27"
    },
    {
        game: 231,
        day: "Sat, Sep 28"
    },
    {
        game: 232,
        day: "Sun, Sep 29"
    },
    {
        game: 233,
        day: "Mon, Sep 30"
    },
    {
        game: 234,
        day: "Tue, Oct 1"
    },
    {
        game: 235,
        day: "Wed, Oct 2"
    },
    {
        game: 236,
        day: "Thu, Oct 3"
    },
    {
        game: 237,
        day: "Fri, Oct 4"
    },
    {
        game: 238,
        day: "Sat, Oct 5"
    },
    {
        game: 239,
        day: "Sun, Oct 6"
    },
    {
        game: 240,
        day: "Mon, Oct 7"
    },
    {
        game: 241,
        day: "Tue, Oct 8"
    },
    {
        game: 242,
        day: "Wed, Oct 9"
    },
    {
        game: 243,
        day: "Thu, Oct 10"
    },
    {
        game: 244,
        day: "Fri, Oct 11"
    },
    {
        game: 245,
        day: "Sat, Oct 12"
    },
    {
        game: 246,
        day: "Sun, Oct 13"
    },
    {
        game: 247,
        day: "Mon, Oct 14"
    },
    {
        game: 248,
        day: "Tue, Oct 15"
    },
    {
        game: 249,
        day: "Wed, Oct 16"
    },
    {
        game: 250,
        day: "Thu, Oct 17"
    },
    {
        game: 251,
        day: "Fri, Oct 18"
    },
    {
        game: 252,
        day: "Sat, Oct 19"
    },
    {
        game: 253,
        day: "Sun, Oct 20"
    },
    {
        game: 254,
        day: "Mon, Oct 21"
    },
    {
        game: 255,
        day: "Tue, Oct 22"
    },
    {
        game: 256,
        day: "Wed, Oct 23"
    },
    {
        game: 257,
        day: "Thu, Oct 24"
    },
    {
        game: 258,
        day: "Fri, Oct 25"
    },
    {
        game: 259,
        day: "Sat, Oct 26"
    },
    {
        game: 260,
        day: "Sun, Oct 27"
    },
    {
        game: 261,
        day: "Mon, Oct 28"
    },
    {
        game: 262,
        day: "Tue, Oct 29"
    },
    {
        game: 263,
        day: "Wed, Oct 30"
    },
    {
        game: 264,
        day: "Thu, Oct 31"
    },
    {
        game: 265,
        day: "Fri, Nov 1"
    },
    {
        game: 266,
        day: "Sat, Nov 2"
    },
    {
        game: 267,
        day: "Sun, Nov 3"
    },
    {
        game: 268,
        day: "Mon, Nov 4"
    },
    {
        game: 269,
        day: "Tue, Nov 5"
    },
    {
        game: 270,
        day: "Wed, Nov 6"
    },
    {
        game: 271,
        day: "Thu, Nov 7"
    },
    {
        game: 272,
        day: "Fri, Nov 8"
    },
    {
        game: 273,
        day: "Sat, Nov 9"
    },
    {
        game: 274,
        day: "Sun, Nov 10"
    },
    {
        game: 275,
        day: "Mon, Nov 11"
    },
    {
        game: 276,
        day: "Tue, Nov 12"
    },
    {
        game: 277,
        day: "Wed, Nov 13"
    },
    {
        game: 278,
        day: "Thu, Nov 14"
    },
    {
        game: 279,
        day: "Fri, Nov 15"
    },
    {
        game: 280,
        day: "Sat, Nov 16"
    },
    {
        game: 281,
        day: "Sun, Nov 17"
    },
    {
        game: 282,
        day: "Mon, Nov 18"
    },
    {
        game: 283,
        day: "Tue, Nov 19"
    },
    {
        game: 284,
        day: "Wed, Nov 20"
    },
    {
        game: 285,
        day: "Thu, Nov 21"
    },
    {
        game: 286,
        day: "Fri, Nov 22"
    },
    {
        game: 287,
        day: "Sat, Nov 23"
    },
    {
        game: 288,
        day: "Sun, Nov 24"
    },
    {
        game: 289,
        day: "Mon, Nov 25"
    },
    {
        game: 290,
        day: "Tue, Nov 26"
    },
    {
        game: 291,
        day: "Wed, Nov 27"
    },
    {
        game: 292,
        day: "Thu, Nov 28"
    },
    {
        game: 293,
        day: "Fri, Nov 29"
    },
    {
        game: 294,
        day: "Sat, Nov 30"
    },
    {
        game: 295,
        day: "Sun, Dec 1"
    },
    {
        game: 296,
        day: "Mon, Dec 2"
    },
    {
        game: 297,
        day: "Tue, Dec 3"
    },
    {
        game: 298,
        day: "Wed, Dec 4"
    },
    {
        game: 299,
        day: "Thu, Dec 5"
    },
    {
        game: 300,
        day: "Fri, Dec 6"
    },
    {
        game: 301,
        day: "Sat, Dec 7"
    },
    {
        game: 302,
        day: "Sun, Dec 8"
    },
    {
        game: 303,
        day: "Mon, Dec 9"
    },
    {
        game: 304,
        day: "Tue, Dec 10"
    },
    {
        game: 305,
        day: "Wed, Dec 11"
    },
    {
        game: 306,
        day: "Thu, Dec 12"
    },
    {
        game: 307,
        day: "Fri, Dec 13"
    },
    {
        game: 308,
        day: "Sat, Dec 14"
    },
    {
        game: 309,
        day: "Sun, Dec 15"
    },
    {
        game: 310,
        day: "Mon, Dec 16"
    },
    {
        game: 311,
        day: "Tue, Dec 17"
    },
    {
        game: 312,
        day: "Wed, Dec 18"
    },
    {
        game: 313,
        day: "Thu, Dec 19"
    },
    {
        game: 314,
        day: "Fri, Dec 20"
    },
    {
        game: 315,
        day: "Sat, Dec 21"
    },
    {
        game: 316,
        day: "Sun, Dec 22"
    },
    {
        game: 317,
        day: "Mon, Dec 23"
    },
    {
        game: 318,
        day: "Tue, Dec 24"
    },
    {
        game: 319,
        day: "Wed, Dec 25"
    },
    {
        game: 320,
        day: "Thu, Dec 26"
    },
    {
        game: 321,
        day: "Fri, Dec 27"
    },
    {
        game: 322,
        day: "Sat, Dec 28"
    },
    {
        game: 323,
        day: "Sun, Dec 29"
    },
    {
        game: 324,
        day: "Mon, Dec 30"
    },
    {
        game: 325,
        day: "Tue, Dec 31"
    },
    {
        game: 326,
        day: "Wed, Jan 1"
    },
    {
        game: 327,
        day: "Thu, Jan 2"
    },
    {
        game: 328,
        day: "Fri, Jan 3"
    },
    {
        game: 329,
        day: "Sat, Jan 4"
    },
    {
        game: 330,
        day: "Sun, Jan 5"
    },
    {
        game: 331,
        day: "Mon, Jan 6"
    },
    {
        game: 332,
        day: "Tue, Jan 7"
    },
    {
        game: 333,
        day: "Wed, Jan 8"
    },
    {
        game: 334,
        day: "Thu, Jan 9"
    },
    {
        game: 335,
        day: "Fri, Jan 10"
    },
    {
        game: 336,
        day: "Sat, Jan 11"
    },
    {
        game: 337,
        day: "Sun, Jan 12"
    },
    {
        game: 338,
        day: "Mon, Jan 13"
    },
    {
        game: 339,
        day: "Tue, Jan 14"
    },
    {
        game: 340,
        day: "Wed, Jan 15"
    },
    {
        game: 341,
        day: "Thu, Jan 16"
    },
    {
        game: 342,
        day: "Fri, Jan 17"
    },
    {
        game: 343,
        day: "Sat, Jan 18"
    },
    {
        game: 344,
        day: "Sun, Jan 19"
    },
    {
        game: 345,
        day: "Mon, Jan 20"
    },
    {
        game: 346,
        day: "Tue, Jan 21"
    },
    {
        game: 347,
        day: "Wed, Jan 22"
    },
    {
        game: 348,
        day: "Thu, Jan 23"
    },
    {
        game: 349,
        day: "Fri, Jan 24"
    },
    {
        game: 350,
        day: "Sat, Jan 25"
    },
    {
        game: 351,
        day: "Sun, Jan 26"
    },
    {
        game: 352,
        day: "Mon, Jan 27"
    },
    {
        game: 353,
        day: "Tue, Jan 28"
    },
    {
        game: 354,
        day: "Wed, Jan 29"
    },
    {
        game: 355,
        day: "Thu, Jan 30"
    },
    {
        game: 356,
        day: "Fri, Jan 31"
    },
    {
        game: 357,
        day: "Sat, Feb 1"
    },
    {
        game: 358,
        day: "Sun, Feb 2"
    },
    {
        game: 359,
        day: "Mon, Feb 3"
    },
    {
        game: 360,
        day: "Tue, Feb 4"
    },
    {
        game: 361,
        day: "Wed, Feb 5"
    },
    {
        game: 362,
        day: "Thu, Feb 6"
    },
    {
        game: 363,
        day: "Fri, Feb 7"
    },
    {
        game: 364,
        day: "Sat, Feb 8"
    },
    {
        game: 365,
        day: "Sun, Feb 9"
    },
    {
        game: 366,
        day: "Mon, Feb 10"
    },
    {
        game: 367,
        day: "Tue, Feb 11"
    },
    {
        game: 368,
        day: "Wed, Feb 12"
    },
    {
        game: 369,
        day: "Thu, Feb 13"
    },
    {
        game: 370,
        day: "Fri, Feb 14"
    },
    {
        game: 371,
        day: "Sat, Feb 15"
    },
    {
        game: 372,
        day: "Sun, Feb 16"
    },
    {
        game: 373,
        day: "Mon, Feb 17"
    },
    {
        game: 374,
        day: "Tue, Feb 18"
    },
    {
        game: 375,
        day: "Wed, Feb 19"
    },
    {
        game: 376,
        day: "Thu, Feb 20"
    },
    {
        game: 377,
        day: "Fri, Feb 21"
    },
    {
        game: 378,
        day: "Sat, Feb 22"
    },
    {
        game: 379,
        day: "Sun, Feb 23"
    },
    {
        game: 380,
        day: "Mon, Feb 24"
    },
    {
        game: 381,
        day: "Tue, Feb 25"
    },
    {
        game: 382,
        day: "Wed, Feb 26"
    },
    {
        game: 383,
        day: "Thu, Feb 27"
    },
    {
        game: 384,
        day: "Fri, Feb 28"
    },
    {
        game: 385,
        day: "Sat, Mar 1"
    },
    {
        game: 386,
        day: "Sun, Mar 2"
    },
    {
        game: 387,
        day: "Mon, Mar 3"
    },
    {
        game: 388,
        day: "Tue, Mar 4"
    },
    {
        game: 389,
        day: "Wed, Mar 5"
    },
    {
        game: 390,
        day: "Thu, Mar 6"
    },
    {
        game: 391,
        day: "Fri, Mar 7"
    },
    {
        game: 392,
        day: "Sat, Mar 8"
    },
    {
        game: 393,
        day: "Sun, Mar 9"
    },
    {
        game: 394,
        day: "Mon, Mar 10"
    },
    {
        game: 395,
        day: "Tue, Mar 11"
    },
    {
        game: 396,
        day: "Wed, Mar 12"
    },
    {
        game: 397,
        day: "Thu, Mar 13"
    },
    {
        game: 398,
        day: "Fri, Mar 14"
    },
    {
        game: 399,
        day: "Sat, Mar 15"
    },
    {
        game: 400,
        day: "Sun, Mar 16"
    }
]

export default prevGames
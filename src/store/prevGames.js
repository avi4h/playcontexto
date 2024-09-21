const prevGames = [
    {
        game: 1,
        day: "Sun, Sep 1"
    },
    {
        game: 2,
        day: "Mon, Sep 2"
    },
    {
        game: 3,
        day: "Tue, Sep 3"
    },
    {
        game: 4,
        day: "Wed, Sep 4"
    },
    {
        game: 5,
        day: "Thu, Sep 5"
    },
    {
        game: 6,
        day: "Fri, Sep 6"
    },
    {
        game: 7,
        day: "Sat, Sep 7"
    },
    {
        game: 8,
        day: "Sun, Sep 8"
    },
    {
        game: 9,
        day: "Mon, Sep 9"
    },
    {
        game: 10,
        day: "Tue, Sep 10"
    },
    {
        game: 11,
        day: "Wed, Sep 11"
    },
    {
        game: 12,
        day: "Thu, Sep 12"
    },
    {
        game: 13,
        day: "Fri, Sep 13"
    },
    {
        game: 14,
        day: "Sat, Sep 14"
    },
    {
        game: 15,
        day: "Sun, Sep 15"
    },
    {
        game: 16,
        day: "Mon, Sep 16"
    },
    {
        game: 17,
        day: "Tue, Sep 17"
    },
    {
        game: 18,
        day: "Wed, Sep 18"
    },
    {
        game: 19,
        day: "Thu, Sep 19"
    },
    {
        game: 20,
        day: "Fri, Sep 20"
    },
    {
        game: 21,
        day: "Sat, Sep 21"
    },
    {
        game: 22,
        day: "Sun, Sep 22"
    },
    {
        game: 23,
        day: "Mon, Sep 23"
    },
    {
        game: 24,
        day: "Tue, Sep 24"
    },
    {
        game: 25,
        day: "Wed, Sep 25"
    },
    {
        game: 26,
        day: "Thu, Sep 26"
    },
    {
        game: 27,
        day: "Fri, Sep 27"
    },
    {
        game: 28,
        day: "Sat, Sep 28"
    },
    {
        game: 29,
        day: "Sun, Sep 29"
    },
    {
        game: 30,
        day: "Mon, Sep 30"
    },
    {
        game: 31,
        day: "Tue, Oct 1"
    },
    {
        game: 32,
        day: "Wed, Oct 2"
    },
    {
        game: 33,
        day: "Thu, Oct 3"
    },
    {
        game: 34,
        day: "Fri, Oct 4"
    },
    {
        game: 35,
        day: "Sat, Oct 5"
    },
    {
        game: 36,
        day: "Sun, Oct 6"
    },
    {
        game: 37,
        day: "Mon, Oct 7"
    },
    {
        game: 38,
        day: "Tue, Oct 8"
    },
    {
        game: 39,
        day: "Wed, Oct 9"
    },
    {
        game: 40,
        day: "Thu, Oct 10"
    },
    {
        game: 41,
        day: "Fri, Oct 11"
    },
    {
        game: 42,
        day: "Sat, Oct 12"
    },
    {
        game: 43,
        day: "Sun, Oct 13"
    },
    {
        game: 44,
        day: "Mon, Oct 14"
    },
    {
        game: 45,
        day: "Tue, Oct 15"
    },
    {
        game: 46,
        day: "Wed, Oct 16"
    },
    {
        game: 47,
        day: "Thu, Oct 17"
    },
    {
        game: 48,
        day: "Fri, Oct 18"
    },
    {
        game: 49,
        day: "Sat, Oct 19"
    },
    {
        game: 50,
        day: "Sun, Oct 20"
    },
    {
        game: 51,
        day: "Mon, Oct 21"
    },
    {
        game: 52,
        day: "Tue, Oct 22"
    },
    {
        game: 53,
        day: "Wed, Oct 23"
    },
    {
        game: 54,
        day: "Thu, Oct 24"
    },
    {
        game: 55,
        day: "Fri, Oct 25"
    },
    {
        game: 56,
        day: "Sat, Oct 26"
    },
    {
        game: 57,
        day: "Sun, Oct 27"
    },
    {
        game: 58,
        day: "Mon, Oct 28"
    },
    {
        game: 59,
        day: "Tue, Oct 29"
    },
    {
        game: 60,
        day: "Wed, Oct 30"
    },
    {
        game: 61,
        day: "Thu, Oct 31"
    },
    {
        game: 62,
        day: "Fri, Nov 1"
    },
    {
        game: 63,
        day: "Sat, Nov 2"
    },
    {
        game: 64,
        day: "Sun, Nov 3"
    },
    {
        game: 65,
        day: "Mon, Nov 4"
    },
    {
        game: 66,
        day: "Tue, Nov 5"
    },
    {
        game: 67,
        day: "Wed, Nov 6"
    },
    {
        game: 68,
        day: "Thu, Nov 7"
    },
    {
        game: 69,
        day: "Fri, Nov 8"
    },
    {
        game: 70,
        day: "Sat, Nov 9"
    },
    {
        game: 71,
        day: "Sun, Nov 10"
    },
    {
        game: 72,
        day: "Mon, Nov 11"
    },
    {
        game: 73,
        day: "Tue, Nov 12"
    },
    {
        game: 74,
        day: "Wed, Nov 13"
    },
    {
        game: 75,
        day: "Thu, Nov 14"
    },
    {
        game: 76,
        day: "Fri, Nov 15"
    },
    {
        game: 77,
        day: "Sat, Nov 16"
    },
    {
        game: 78,
        day: "Sun, Nov 17"
    },
    {
        game: 79,
        day: "Mon, Nov 18"
    },
    {
        game: 80,
        day: "Tue, Nov 19"
    },
    {
        game: 81,
        day: "Wed, Nov 20"
    },
    {
        game: 82,
        day: "Thu, Nov 21"
    },
    {
        game: 83,
        day: "Fri, Nov 22"
    },
    {
        game: 84,
        day: "Sat, Nov 23"
    },
    {
        game: 85,
        day: "Sun, Nov 24"
    },
    {
        game: 86,
        day: "Mon, Nov 25"
    },
    {
        game: 87,
        day: "Tue, Nov 26"
    },
    {
        game: 88,
        day: "Wed, Nov 27"
    },
    {
        game: 89,
        day: "Thu, Nov 28"
    },
    {
        game: 90,
        day: "Fri, Nov 29"
    },
    {
        game: 91,
        day: "Sat, Nov 30"
    },
    {
        game: 92,
        day: "Sun, Dec 1"
    },
    {
        game: 93,
        day: "Mon, Dec 2"
    },
    {
        game: 94,
        day: "Tue, Dec 3"
    },
    {
        game: 95,
        day: "Wed, Dec 4"
    },
    {
        game: 96,
        day: "Thu, Dec 5"
    },
    {
        game: 97,
        day: "Fri, Dec 6"
    },
    {
        game: 98,
        day: "Sat, Dec 7"
    },
    {
        game: 99,
        day: "Sun, Dec 8"
    },
    {
        game: 100,
        day: "Mon, Dec 9"
    },
    {
        game: 101,
        day: "Tue, Dec 10"
    },
    {
        game: 102,
        day: "Wed, Dec 11"
    },
    {
        game: 103,
        day: "Thu, Dec 12"
    },
    {
        game: 104,
        day: "Fri, Dec 13"
    },
    {
        game: 105,
        day: "Sat, Dec 14"
    },
    {
        game: 106,
        day: "Sun, Dec 15"
    },
    {
        game: 107,
        day: "Mon, Dec 16"
    },
    {
        game: 108,
        day: "Tue, Dec 17"
    },
    {
        game: 109,
        day: "Wed, Dec 18"
    },
    {
        game: 110,
        day: "Thu, Dec 19"
    },
    {
        game: 111,
        day: "Fri, Dec 20"
    },
    {
        game: 112,
        day: "Sat, Dec 21"
    },
    {
        game: 113,
        day: "Sun, Dec 22"
    },
    {
        game: 114,
        day: "Mon, Dec 23"
    },
    {
        game: 115,
        day: "Tue, Dec 24"
    },
    {
        game: 116,
        day: "Wed, Dec 25"
    },
    {
        game: 117,
        day: "Thu, Dec 26"
    },
    {
        game: 118,
        day: "Fri, Dec 27"
    },
    {
        game: 119,
        day: "Sat, Dec 28"
    },
    {
        game: 120,
        day: "Sun, Dec 29"
    },
    {
        game: 121,
        day: "Mon, Dec 30"
    },
    {
        game: 122,
        day: "Tue, Dec 31"
    },
    {
        game: 123,
        day: "Wed, Jan 1"
    },
    {
        game: 124,
        day: "Thu, Jan 2"
    },
    {
        game: 125,
        day: "Fri, Jan 3"
    },
    {
        game: 126,
        day: "Sat, Jan 4"
    },
    {
        game: 127,
        day: "Sun, Jan 5"
    },
    {
        game: 128,
        day: "Mon, Jan 6"
    },
    {
        game: 129,
        day: "Tue, Jan 7"
    },
    {
        game: 130,
        day: "Wed, Jan 8"
    },
    {
        game: 131,
        day: "Thu, Jan 9"
    },
    {
        game: 132,
        day: "Fri, Jan 10"
    },
    {
        game: 133,
        day: "Sat, Jan 11"
    },
    {
        game: 134,
        day: "Sun, Jan 12"
    },
    {
        game: 135,
        day: "Mon, Jan 13"
    },
    {
        game: 136,
        day: "Tue, Jan 14"
    },
    {
        game: 137,
        day: "Wed, Jan 15"
    },
    {
        game: 138,
        day: "Thu, Jan 16"
    },
    {
        game: 139,
        day: "Fri, Jan 17"
    },
    {
        game: 140,
        day: "Sat, Jan 18"
    },
    {
        game: 141,
        day: "Sun, Jan 19"
    },
    {
        game: 142,
        day: "Mon, Jan 20"
    },
    {
        game: 143,
        day: "Tue, Jan 21"
    },
    {
        game: 144,
        day: "Wed, Jan 22"
    },
    {
        game: 145,
        day: "Thu, Jan 23"
    },
    {
        game: 146,
        day: "Fri, Jan 24"
    },
    {
        game: 147,
        day: "Sat, Jan 25"
    },
    {
        game: 148,
        day: "Sun, Jan 26"
    },
    {
        game: 149,
        day: "Mon, Jan 27"
    },
    {
        game: 150,
        day: "Tue, Jan 28"
    },
    {
        game: 151,
        day: "Wed, Jan 29"
    },
    {
        game: 152,
        day: "Thu, Jan 30"
    },
    {
        game: 153,
        day: "Fri, Jan 31"
    },
    {
        game: 154,
        day: "Sat, Feb 1"
    },
    {
        game: 155,
        day: "Sun, Feb 2"
    },
    {
        game: 156,
        day: "Mon, Feb 3"
    },
    {
        game: 157,
        day: "Tue, Feb 4"
    },
    {
        game: 158,
        day: "Wed, Feb 5"
    },
    {
        game: 159,
        day: "Thu, Feb 6"
    },
    {
        game: 160,
        day: "Fri, Feb 7"
    },
    {
        game: 161,
        day: "Sat, Feb 8"
    },
    {
        game: 162,
        day: "Sun, Feb 9"
    },
    {
        game: 163,
        day: "Mon, Feb 10"
    },
    {
        game: 164,
        day: "Tue, Feb 11"
    },
    {
        game: 165,
        day: "Wed, Feb 12"
    },
    {
        game: 166,
        day: "Thu, Feb 13"
    },
    {
        game: 167,
        day: "Fri, Feb 14"
    },
    {
        game: 168,
        day: "Sat, Feb 15"
    },
    {
        game: 169,
        day: "Sun, Feb 16"
    },
    {
        game: 170,
        day: "Mon, Feb 17"
    },
    {
        game: 171,
        day: "Tue, Feb 18"
    },
    {
        game: 172,
        day: "Wed, Feb 19"
    },
    {
        game: 173,
        day: "Thu, Feb 20"
    },
    {
        game: 174,
        day: "Fri, Feb 21"
    },
    {
        game: 175,
        day: "Sat, Feb 22"
    },
    {
        game: 176,
        day: "Sun, Feb 23"
    },
    {
        game: 177,
        day: "Mon, Feb 24"
    },
    {
        game: 178,
        day: "Tue, Feb 25"
    },
    {
        game: 179,
        day: "Wed, Feb 26"
    },
    {
        game: 180,
        day: "Thu, Feb 27"
    },
    {
        game: 181,
        day: "Fri, Feb 28"
    },
    {
        game: 182,
        day: "Sat, Mar 1"
    },
    {
        game: 183,
        day: "Sun, Mar 2"
    },
    {
        game: 184,
        day: "Mon, Mar 3"
    },
    {
        game: 185,
        day: "Tue, Mar 4"
    },
    {
        game: 186,
        day: "Wed, Mar 5"
    },
    {
        game: 187,
        day: "Thu, Mar 6"
    },
    {
        game: 188,
        day: "Fri, Mar 7"
    },
    {
        game: 189,
        day: "Sat, Mar 8"
    },
    {
        game: 190,
        day: "Sun, Mar 9"
    },
    {
        game: 191,
        day: "Mon, Mar 10"
    },
    {
        game: 192,
        day: "Tue, Mar 11"
    },
    {
        game: 193,
        day: "Wed, Mar 12"
    },
    {
        game: 194,
        day: "Thu, Mar 13"
    },
    {
        game: 195,
        day: "Fri, Mar 14"
    },
    {
        game: 196,
        day: "Sat, Mar 15"
    },
    {
        game: 197,
        day: "Sun, Mar 16"
    },
    {
        game: 198,
        day: "Mon, Mar 17"
    },
    {
        game: 199,
        day: "Tue, Mar 18"
    },
    {
        game: 200,
        day: "Wed, Mar 19"
    },
    {
        game: 201,
        day: "Thu, Mar 20"
    },
    {
        game: 202,
        day: "Fri, Mar 21"
    },
    {
        game: 203,
        day: "Sat, Mar 22"
    },
    {
        game: 204,
        day: "Sun, Mar 23"
    },
    {
        game: 205,
        day: "Mon, Mar 24"
    },
    {
        game: 206,
        day: "Tue, Mar 25"
    },
    {
        game: 207,
        day: "Wed, Mar 26"
    },
    {
        game: 208,
        day: "Thu, Mar 27"
    },
    {
        game: 209,
        day: "Fri, Mar 28"
    },
    {
        game: 210,
        day: "Sat, Mar 29"
    },
    {
        game: 211,
        day: "Sun, Mar 30"
    },
    {
        game: 212,
        day: "Mon, Mar 31"
    },
    {
        game: 213,
        day: "Tue, Apr 1"
    },
    {
        game: 214,
        day: "Wed, Apr 2"
    },
    {
        game: 215,
        day: "Thu, Apr 3"
    },
    {
        game: 216,
        day: "Fri, Apr 4"
    },
    {
        game: 217,
        day: "Sat, Apr 5"
    },
    {
        game: 218,
        day: "Sun, Apr 6"
    },
    {
        game: 219,
        day: "Mon, Apr 7"
    },
    {
        game: 220,
        day: "Tue, Apr 8"
    },
    {
        game: 221,
        day: "Wed, Apr 9"
    },
    {
        game: 222,
        day: "Thu, Apr 10"
    },
    {
        game: 223,
        day: "Fri, Apr 11"
    },
    {
        game: 224,
        day: "Sat, Apr 12"
    },
    {
        game: 225,
        day: "Sun, Apr 13"
    },
    {
        game: 226,
        day: "Mon, Apr 14"
    },
    {
        game: 227,
        day: "Tue, Apr 15"
    },
    {
        game: 228,
        day: "Wed, Apr 16"
    },
    {
        game: 229,
        day: "Thu, Apr 17"
    },
    {
        game: 230,
        day: "Fri, Apr 18"
    },
    {
        game: 231,
        day: "Sat, Apr 19"
    },
    {
        game: 232,
        day: "Sun, Apr 20"
    },
    {
        game: 233,
        day: "Mon, Apr 21"
    },
    {
        game: 234,
        day: "Tue, Apr 22"
    },
    {
        game: 235,
        day: "Wed, Apr 23"
    },
    {
        game: 236,
        day: "Thu, Apr 24"
    },
    {
        game: 237,
        day: "Fri, Apr 25"
    },
    {
        game: 238,
        day: "Sat, Apr 26"
    },
    {
        game: 239,
        day: "Sun, Apr 27"
    },
    {
        game: 240,
        day: "Mon, Apr 28"
    },
    {
        game: 241,
        day: "Tue, Apr 29"
    },
    {
        game: 242,
        day: "Wed, Apr 30"
    },
    {
        game: 243,
        day: "Thu, May 1"
    },
    {
        game: 244,
        day: "Fri, May 2"
    },
    {
        game: 245,
        day: "Sat, May 3"
    },
    {
        game: 246,
        day: "Sun, May 4"
    },
    {
        game: 247,
        day: "Mon, May 5"
    },
    {
        game: 248,
        day: "Tue, May 6"
    },
    {
        game: 249,
        day: "Wed, May 7"
    },
    {
        game: 250,
        day: "Thu, May 8"
    },
    {
        game: 251,
        day: "Fri, May 9"
    },
    {
        game: 252,
        day: "Sat, May 10"
    },
    {
        game: 253,
        day: "Sun, May 11"
    },
    {
        game: 254,
        day: "Mon, May 12"
    },
    {
        game: 255,
        day: "Tue, May 13"
    },
    {
        game: 256,
        day: "Wed, May 14"
    },
    {
        game: 257,
        day: "Thu, May 15"
    },
    {
        game: 258,
        day: "Fri, May 16"
    },
    {
        game: 259,
        day: "Sat, May 17"
    },
    {
        game: 260,
        day: "Sun, May 18"
    },
    {
        game: 261,
        day: "Mon, May 19"
    },
    {
        game: 262,
        day: "Tue, May 20"
    },
    {
        game: 263,
        day: "Wed, May 21"
    },
    {
        game: 264,
        day: "Thu, May 22"
    },
    {
        game: 265,
        day: "Fri, May 23"
    },
    {
        game: 266,
        day: "Sat, May 24"
    },
    {
        game: 267,
        day: "Sun, May 25"
    },
    {
        game: 268,
        day: "Mon, May 26"
    },
    {
        game: 269,
        day: "Tue, May 27"
    },
    {
        game: 270,
        day: "Wed, May 28"
    },
    {
        game: 271,
        day: "Thu, May 29"
    },
    {
        game: 272,
        day: "Fri, May 30"
    },
    {
        game: 273,
        day: "Sat, May 31"
    },
    {
        game: 274,
        day: "Sun, Jun 1"
    },
    {
        game: 275,
        day: "Mon, Jun 2"
    },
    {
        game: 276,
        day: "Tue, Jun 3"
    },
    {
        game: 277,
        day: "Wed, Jun 4"
    },
    {
        game: 278,
        day: "Thu, Jun 5"
    },
    {
        game: 279,
        day: "Fri, Jun 6"
    },
    {
        game: 280,
        day: "Sat, Jun 7"
    },
    {
        game: 281,
        day: "Sun, Jun 8"
    },
    {
        game: 282,
        day: "Mon, Jun 9"
    },
    {
        game: 283,
        day: "Tue, Jun 10"
    }
  ]

  export default prevGames
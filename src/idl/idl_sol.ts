import * as anchor from "@project-serum/anchor";
export const IDL: anchor.Idl = {
  "version": "0.1.0",
  "name": "dimon_presale",
  "constants": [
    {
      "name": "PRESALE_SEED",
      "type": "bytes",
      "value": "[69, 77, 80, 73, 82, 69, 95, 80, 82, 69, 83, 65, 76, 69, 95, 83, 69, 69, 68]"
    }
  ],
  "instructions": [
    {
      "name": "createPresale",
      "accounts": [
        {
          "name": "presaleInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "pricePerToken",
          "type": "u64"
        },
        {
          "name": "pricePerTokenNext",
          "type": "u64"
        },
        {
          "name": "identifier",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updatePresale",
      "accounts": [
        {
          "name": "presaleInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "pricePerToken",
          "type": "u64"
        },
        {
          "name": "pricePerTokenNext",
          "type": "u64"
        },
        {
          "name": "identifier",
          "type": "u8"
        }
      ]
    },
    {
      "name": "buySol",
      "accounts": [
        {
          "name": "presaleInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "priceUpdate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "presaleAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "quoteAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "presaleInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pricePerToken",
            "type": "u64"
          },
          {
            "name": "identifier",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "pricePerTokenNext",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyQuoteAmount",
            "type": "u128"
          },
          {
            "name": "buyTokenAmount",
            "type": "u64"
          },
          {
            "name": "buyTime",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "TradeEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "solAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        },
        {
          "name": "totalTokenBuyAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalUsdBuyAmount",
          "type": "u128",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "NotAllowed",
      "msg": "Not allowed"
    },
    {
      "code": 6002,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6003,
      "name": "AlreadyMarked",
      "msg": "Already marked"
    },
    {
      "code": 6004,
      "name": "PresaleNotStarted",
      "msg": "Presale not started yet"
    },
    {
      "code": 6005,
      "name": "PresaleEnded",
      "msg": "Presale already ended"
    },
    {
      "code": 6006,
      "name": "TokenAmountMismatch",
      "msg": "Token amount mismatch"
    },
    {
      "code": 6007,
      "name": "InsufficientFund",
      "msg": "Insufficient Tokens"
    },
    {
      "code": 6008,
      "name": "PresaleNotEnded",
      "msg": "Presale not ended yet"
    },
    {
      "code": 6009,
      "name": "NotEndedYet",
      "msg": "Presale not ended yet"
    },
    {
      "code": 6010,
      "name": "Overflow",
      "msg": "Arithmetic overflow"
    },
    {
      "code": 6011,
      "name": "DivisionByZero",
      "msg": "Division by zero"
    },
    {
      "code": 6012,
      "name": "InvalidUsdtMint",
      "msg": "Invalid USDT mint address"
    },
    {
      "code": 6013,
      "name": "InvalidUsdcMint",
      "msg": "Invalid USDC mint address"
    }
  ]
};

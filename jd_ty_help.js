/*
#团圆领红包助力

需要定义环境变量 krtycode 指定助力码 

务必先先获取到助力码后填写变量

[task_local]
#团圆领红包助力
11 11 11 11 * jd_ty_help.js, tag=团圆领红包助力, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true*/

const $ = new Env("团圆领红包助力");
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf3d26=["\x69\x73\x4E\x6F\x64\x65","\x2E\x2F\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","","\x2E\x2F\x6A\x64\x43\x6F\x6F\x6B\x69\x65","\x2E\x2F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x6B\x72\x67\x65\x74\x54\x6F\x6B\x65\x6E","\x6B\x72\x74\x79\x68\x6F\x74","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6B\x72\x74\x79\x63\x6F\x64\x65","\x40","\x73\x70\x6C\x69\x74","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x6F\x64\x65\x2E\x6B\x69\x6E\x67\x72\x61\x6E\x2E\x67\x61\x2F\x74\x79\x7A\x6C\x2E\x6A\x73\x6F\x6E","\x61\x75\x74\x68\x6F\x72\x43\x6F\x64\x65","\x6C\x65\x6E\x67\x74\x68","\x73\x68\x61\x72\x65\x49\x64","\u672A\u8BBE\u7F6E\u52A9\u529B\u7801\u53D8\u91CF\uFF0C\u53D8\u91CF\uFF1A\x65\x78\x70\x6F\x72\x74\x20\x6B\x72\x74\x79\x63\x6F\x64\x65\x3D\x22\x22\uFF0C\u672C\u6B21\u8FD0\u884C\u4E0D\u4F1A\u52A9\u529B\uFF0C\u4EC5\u83B7\u53D6\u52A9\u529B\u7801","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x6A\x64\x70\x69\x6E\x67\x6F\x75\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x34\x2E\x31\x33\x2E\x30\x3B\x31\x34\x2E\x34\x2E\x32\x3B","\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x31\x30\x2C\x32\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x30\x30\x36\x30\x39\x3B\x73\x75\x70\x70\x6F\x72\x74\x41\x70\x70\x6C\x65\x50\x61\x79\x2F\x31\x3B\x68\x61\x73\x55\x50\x50\x61\x79\x2F\x30\x3B\x70\x75\x73\x68\x4E\x6F\x74\x69\x63\x65\x49\x73\x4F\x70\x65\x6E\x2F\x31\x3B\x68\x61\x73\x4F\x43\x50\x61\x79\x2F\x30\x3B\x73\x75\x70\x70\x6F\x72\x74\x42\x65\x73\x74\x50\x61\x79\x2F\x30\x3B\x73\x65\x73\x73\x69\x6F\x6E\x2F","\x72\x61\x6E\x64\x6F\x6D","\x3B\x70\x61\x70\x2F\x4A\x41\x32\x30\x31\x39\x5F\x33\x31\x31\x31\x37\x38\x39\x3B\x62\x72\x61\x6E\x64\x2F\x61\x70\x70\x6C\x65\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x36\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38","\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x77\x61\x69\x74","\x43\x4B\x31\u9ED8\u8BA4\u53BB\u52A9\u529B\u4F5C\u8005","\x66\x65\x73\x74\x69\x76\x61\x6C\x68\x62\x5F\x68\x65\x6C\x70","\x63\x73\x5F\x68\x35","\x31\x2E\x30","\x36\x33\x62\x66\x62\x62\x35\x35\x35\x32\x62\x39\x65\x34\x36\x30\x32\x66\x38\x64\x64\x31\x65\x30","\x33\x38\x63\x35\x36","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x3F\x67\x5F\x74\x79\x3D\x68\x35\x26\x67\x5F\x74\x6B\x3D\x26\x61\x70\x70\x43\x6F\x64\x65\x3D\x6D\x73\x32\x33\x36\x32\x66\x63\x39\x65\x26","\x26\x6C\x6F\x67\x69\x6E\x54\x79\x70\x65\x3D\x32\x26\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x70\x72\x6F\x6D\x6F\x74\x65\x2F\x32\x30\x32\x33\x2F\x73\x70\x72\x69\x6E\x67\x32\x30\x32\x33\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D","\x6A\x64\x6C\x74\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x33\x2E\x39\x2E\x30\x3B\x3B\x3B\x4D\x2F\x35\x2E\x30\x3B\x68\x61\x73\x55\x50\x50\x61\x79\x2F\x30\x3B\x70\x75\x73\x68\x4E\x6F\x74\x69\x63\x65\x49\x73\x4F\x70\x65\x6E\x2F\x31\x3B\x6C\x61\x6E\x67\x2F\x7A\x68\x5F\x43\x4E\x3B\x68\x61\x73\x4F\x43\x50\x61\x79\x2F\x30\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x31\x35\x37\x3B\x73\x75\x70\x70\x6F\x72\x74\x42\x65\x73\x74\x50\x61\x79\x2F\x30\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x65\x66\x2F\x31\x3B\x65\x70\x2F\x25\x37\x42\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x75\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x59\x57\x53\x35\x5A\x77\x59\x35\x45\x4E\x4F\x6D\x44\x51\x44\x72\x43\x57\x47\x6D\x5A\x4A\x75\x32\x44\x74\x44\x77\x5A\x4A\x4F\x79\x59\x74\x63\x6D\x44\x57\x44\x72\x43\x4E\x47\x6D\x59\x57\x59\x79\x43\x74\x5A\x76\x59\x6D\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4A\x47\x6B\x45\x4B\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x61\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x37\x33\x39\x37\x30\x30\x39\x35\x25\x32\x43\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x75\x25\x35\x43\x25\x32\x46\x4B\x55\x63\x68\x61\x4E\x48\x55\x4B\x34\x58\x57\x76\x58\x62\x63\x25\x35\x43\x25\x32\x46\x75\x6C\x50\x4B\x53\x54\x75\x78\x62\x71\x67\x6E\x44\x61\x73\x7A\x54\x54\x35\x4C\x48\x61\x52\x55\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2E\x30\x2E\x33\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6E\x61\x6D\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6F\x6D\x2E\x6A\x64\x2E\x6A\x64\x6D\x6F\x62\x69\x6C\x65\x6C\x69\x74\x65\x25\x32\x32\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x31\x25\x37\x44\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x38\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31\x3B","\x63\x69\x64\x3D\x33","\x70\x61\x72\x73\x65","\u53BB\u52A9\u529B\x20\u2192\x20","\x63\x6F\x64\x65","\x73\x75\x63\x63\x65\x73\x73","\u2705\x20\u52A9\u529B\u6210\u529F","\u597D\u53CB\u7EA2\u5305\u5DF2\u88AB\u9886\u5149\u4E86","\u2705\x20\u52A9\u529B\u5DF2\u6EE1","\u6D3B\u52A8\u706B\u7206","\u4E0D\u591A\u8BF4\u4E86\uFF0C\u4E4C\u6F06\u561B\u9ED1","\x6C\x6F\x67\x45\x72\x72","\x67\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x3F\x67\x5F\x74\x79\x3D\x68\x35\x26\x67\x5F\x74\x6B\x3D\x26\x61\x70\x70\x43\x6F\x64\x65\x3D\x6D\x73\x32\x33\x36\x32\x66\x63\x39\x65\x26\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x61\x63\x74\x69\x76\x65\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x36\x33\x62\x66\x62\x62\x35\x35\x35\x32\x62\x39\x65\x34\x36\x30\x32\x66\x38\x64\x64\x31\x65\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x68\x61\x72\x65\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32","\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x74\x65\x6D\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x53\x5F\x5F\x70\x32\x52\x42\x59\x65\x5F\x46\x58\x55\x49\x77\x25\x32\x32\x25\x37\x44\x26\x61\x70\x70\x69\x64\x3D\x63\x73\x5F\x68\x35\x26\x63\x6C\x69\x65\x6E\x74\x3D\x63\x73\x5F\x68\x35\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x66\x65\x73\x74\x69\x76\x61\x6C\x68\x62\x5F\x68\x65\x6C\x70\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x2E\x30\x26\x68\x35\x73\x74\x3D\x32\x30\x32\x33\x30\x31\x31\x37\x32\x33\x34\x32\x30\x38\x30\x34\x34\x25\x33\x42\x38\x33\x39\x39\x36\x37\x34\x34\x33\x37\x33\x32\x30\x38\x35\x36\x25\x33\x42\x33\x38\x63\x35\x36\x25\x33\x42\x74\x6B\x30\x32\x77\x61\x37\x37\x63\x31\x62\x31\x66\x31\x38\x6E\x56\x68\x65\x56\x63\x4B\x50\x6C\x69\x33\x63\x31\x55\x4A\x69\x38\x6A\x6A\x42\x6C\x4A\x4F\x6B\x77\x33\x5A\x79\x75\x58\x31\x6C\x63\x6D\x70\x54\x74\x30\x39\x38\x66\x74\x47\x38\x30\x76\x37\x53\x69\x47\x52\x44\x30\x4A\x68\x57\x25\x32\x46\x64\x39\x76\x58\x38\x25\x32\x42\x4F\x6F\x58\x41\x6C\x4D\x42\x55\x31\x25\x32\x46\x25\x32\x42\x4F\x59\x47\x25\x33\x42\x30\x65\x39\x35\x62\x33\x61\x61\x30\x64\x38\x64\x63\x37\x30\x33\x33\x32\x66\x31\x62\x65\x32\x37\x33\x65\x35\x30\x66\x62\x36\x66\x33\x62\x30\x31\x36\x61\x36\x62\x30\x34\x66\x38\x35\x34\x64\x38\x62\x37\x62\x66\x36\x32\x33\x63\x31\x34\x39\x65\x34\x34\x34\x32\x25\x33\x42\x33\x2E\x31\x25\x33\x42\x31\x36\x37\x33\x39\x37\x30\x31\x32\x38\x30\x34\x34\x25\x33\x42\x37\x34\x31\x34\x63\x34\x65\x35\x36\x32\x37\x38\x35\x38\x30\x61\x31\x33\x33\x62\x36\x30\x62\x37\x32\x61\x33\x30\x62\x65\x62\x32\x37\x36\x34\x64\x32\x65\x36\x31\x63\x36\x36\x61\x35\x36\x32\x30\x65\x38\x65\x38\x33\x38\x65\x30\x36\x36\x34\x34\x64\x31\x62\x66\x30\x39\x61\x32\x61\x64\x64\x61\x37\x37\x65\x32\x37\x62\x38\x31\x61\x31\x31\x31\x33\x39\x62\x62\x37\x33\x38\x35\x61\x31\x34\x32\x33\x30\x65\x35\x64\x66\x37\x61\x62\x62\x63\x61\x35\x61\x35\x31\x30\x33\x62\x65\x39\x38\x63\x32\x39\x65\x66\x31\x37\x64\x34\x65\x64\x33\x32\x32\x65\x61\x34\x36\x61\x37\x33\x34\x31\x35\x65\x64\x63\x36\x34\x32\x65\x65\x65\x65\x62\x30\x62\x34\x37\x37\x32\x66\x64\x62\x66\x31\x39\x38\x31\x64\x32\x36\x66\x32\x37\x30\x32\x39\x33\x31\x38\x32\x38\x37\x62\x30\x39\x39\x64\x30\x65\x31\x35\x65\x37\x64\x36\x63\x66\x37\x34\x37\x32\x32\x63\x63\x64\x32\x38\x34\x30\x37\x38\x31\x64\x37\x32\x35\x37\x65\x62\x63\x32\x66\x39\x30\x33\x30\x30\x61\x37\x39\x66\x35\x32\x39\x33\x31\x37\x32\x61\x65\x65\x30\x31\x65\x61\x62\x32\x63\x33\x36\x63\x65\x30\x37\x33\x61\x26\x6C\x6F\x67\x69\x6E\x54\x79\x70\x65\x3D\x32\x26\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x3F\x67\x5F\x74\x79\x3D\x68\x35\x26\x67\x5F\x74\x6B\x3D\x26\x61\x70\x70\x43\x6F\x64\x65\x3D\x6D\x73\x32\x33\x36\x32\x66\x63\x39\x65\x26\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x61\x63\x74\x69\x76\x65\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x36\x33\x62\x66\x62\x62\x35\x35\x35\x32\x62\x39\x65\x34\x36\x30\x32\x66\x38\x64\x64\x31\x65\x30\x25\x32\x32\x25\x37\x44\x26\x61\x70\x70\x69\x64\x3D\x63\x73\x5F\x68\x35\x26\x63\x6C\x69\x65\x6E\x74\x3D\x63\x73\x5F\x68\x35\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x66\x65\x73\x74\x69\x76\x61\x6C\x68\x62\x5F\x68\x6F\x6D\x65\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x2E\x30\x26\x68\x35\x73\x74\x3D\x32\x30\x32\x33\x30\x31\x31\x37\x32\x33\x34\x32\x30\x35\x39\x34\x37\x25\x33\x42\x38\x33\x39\x39\x36\x37\x34\x34\x33\x37\x33\x32\x30\x38\x35\x36\x25\x33\x42\x33\x38\x63\x35\x36\x25\x33\x42\x74\x6B\x30\x32\x77\x61\x37\x37\x63\x31\x62\x31\x66\x31\x38\x6E\x56\x68\x65\x56\x63\x4B\x50\x6C\x69\x33\x63\x31\x55\x4A\x69\x38\x6A\x6A\x42\x6C\x4A\x4F\x6B\x77\x33\x5A\x79\x75\x58\x31\x6C\x63\x6D\x70\x54\x74\x30\x39\x38\x66\x74\x47\x38\x30\x76\x37\x53\x69\x47\x52\x44\x30\x4A\x68\x57\x25\x32\x46\x64\x39\x76\x58\x38\x25\x32\x42\x4F\x6F\x58\x41\x6C\x4D\x42\x55\x31\x25\x32\x46\x25\x32\x42\x4F\x59\x47\x25\x33\x42\x61\x65\x66\x39\x32\x36\x30\x32\x64\x63\x33\x66\x62\x66\x33\x65\x32\x62\x33\x35\x37\x31\x61\x39\x32\x64\x65\x36\x39\x62\x62\x36\x64\x35\x30\x64\x38\x66\x35\x39\x64\x33\x33\x33\x32\x62\x64\x32\x35\x32\x36\x34\x32\x63\x36\x66\x65\x63\x31\x66\x39\x64\x65\x31\x25\x33\x42\x33\x2E\x31\x25\x33\x42\x31\x36\x37\x33\x39\x37\x30\x31\x32\x35\x39\x34\x37\x25\x33\x42\x37\x34\x31\x34\x63\x34\x65\x35\x36\x32\x37\x38\x35\x38\x30\x61\x31\x33\x33\x62\x36\x30\x62\x37\x32\x61\x33\x30\x62\x65\x62\x32\x37\x36\x34\x64\x32\x65\x36\x31\x63\x36\x36\x61\x35\x36\x32\x30\x65\x38\x65\x38\x33\x38\x65\x30\x36\x36\x34\x34\x64\x31\x62\x66\x30\x39\x61\x32\x61\x64\x64\x61\x37\x37\x65\x32\x37\x62\x38\x31\x61\x31\x31\x31\x33\x39\x62\x62\x37\x33\x38\x35\x61\x31\x34\x32\x33\x30\x65\x35\x64\x66\x37\x61\x62\x62\x63\x61\x35\x61\x35\x31\x30\x33\x62\x65\x39\x38\x63\x32\x39\x65\x66\x31\x37\x64\x34\x65\x64\x33\x32\x32\x65\x61\x34\x36\x61\x37\x33\x34\x31\x35\x65\x64\x63\x36\x34\x32\x65\x65\x65\x65\x62\x30\x62\x34\x37\x37\x32\x66\x64\x62\x66\x31\x39\x38\x31\x64\x32\x36\x66\x32\x37\x30\x32\x39\x33\x31\x38\x32\x38\x37\x62\x30\x39\x39\x64\x30\x65\x31\x35\x65\x37\x64\x36\x63\x66\x37\x34\x37\x32\x32\x63\x63\x64\x32\x38\x34\x30\x37\x38\x31\x64\x37\x32\x35\x37\x65\x62\x63\x32\x66\x39\x30\x33\x30\x30\x61\x37\x39\x66\x35\x32\x39\x33\x31\x37\x32\x61\x65\x65\x30\x31\x65\x61\x62\x32\x63\x33\x36\x63\x65\x30\x37\x33\x61\x26\x6C\x6F\x67\x69\x6E\x54\x79\x70\x65\x3D\x32\x26\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x70\x72\x6F\x6D\x6F\x74\x65\x2F\x32\x30\x32\x33\x2F\x73\x70\x72\x69\x6E\x67\x32\x30\x32\x33\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C\x3F\x61\x63\x74\x69\x76\x65\x49\x64\x3D\x36\x33\x62\x66\x62\x62\x35\x35\x35\x32\x62\x39\x65\x34\x36\x30\x32\x66\x38\x64\x64\x31\x65\x30\x26\x73\x68\x61\x72\x65\x49\x64\x3D\x38\x35\x5F\x31\x32\x31\x5F\x37\x30\x5F\x37\x32\x5F\x38\x34\x5F\x31\x31\x33\x5F\x35\x30\x5F\x31\x31\x33\x5F\x31\x31\x30\x5F\x38\x32\x5F\x37\x32\x5F\x31\x30\x31\x5F\x31\x32\x32\x5F\x31\x30\x37\x5F\x36\x36\x5F\x36\x36\x5F\x34\x37\x5F\x31\x31\x34\x5F\x31\x30\x39\x5F\x31\x31\x31\x5F\x37\x33\x5F\x38\x31\x5F\x36\x31\x5F\x36\x31\x26\x69\x74\x65\x6D\x49\x64\x3D\x53\x5F\x5F\x70\x32\x52\x42\x59\x65\x5F\x46\x58\x55\x49\x77\x26\x73\x6F\x75\x72\x63\x65\x3D\x33\x26\x6A\x78\x73\x69\x64\x3D\x31\x36\x37\x33\x38\x38\x34\x38\x36\x32\x34\x33\x37\x35\x30\x38\x31\x35\x32\x32\x26\x61\x70\x70\x43\x6F\x64\x65\x3D\x6D\x73\x32\x33\x36\x32\x66\x63\x39\x65\x26\x6C\x6E\x67\x3D\x31\x30\x36\x2E\x34\x37\x36\x33\x36\x32\x26\x6C\x61\x74\x3D\x32\x39\x2E\x35\x30\x32\x37\x33\x36\x26\x73\x69\x64\x3D\x61\x66\x37\x36\x61\x38\x30\x37\x36\x64\x31\x64\x62\x35\x64\x63\x66\x31\x32\x61\x64\x64\x31\x34\x61\x65\x32\x62\x66\x63\x61\x77\x26\x75\x6E\x5F\x61\x72\x65\x61\x3D\x34\x5F\x35\x30\x39\x35\x30\x5F\x35\x30\x39\x35\x37\x5F\x30","\x64\x61\x74\x61","\x69\x74\x65\x6D\x49\x64","\x68\x65\x6C\x70\x54\x61\x73\x6B","\u3010\u52A9\u529B\u7801\u3011","\x68\x74\x74\x70\x3A\x2F\x2F\x6B\x72\x2E\x6B\x69\x6E\x67\x72\x61\x6E\x2E\x63\x66\x2F\x68\x35\x73\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x20\x67\x65\x74\x48\x35\x73\x74\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x6F\x62\x6A\x65\x63\x74","\x62\x6F\x64\x79","\x0A","\x0A\u53EF\u80FD\u8FDE\u63A5\u4E0D\u4E0A\u63A5\u53E3\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC","\x70\x6F\x73\x74","\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66","\x66\x6C\x6F\x6F\x72","\x63\x68\x61\x72\x41\x74","\x73\x74\x72\x69\x6E\x67","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x3F","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x32\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x33\x2E\x30\x2E\x33\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31\x20\x45\x64\x67\x2F\x38\x37\x2E\x30\x2E\x34\x32\x38\x30\x2E\x38\x38","\x67\x65\x74\x41\x75\x74\x68\x6F\x72\x43\x6F\x64\x65\x4C\x69\x73\x74\x65\x72\x72","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const notify=$[__Oxf3d26[0x0]]()?require(__Oxf3d26[0x1]):__Oxf3d26[0x2];const jdCookieNode=$[__Oxf3d26[0x0]]()?require(__Oxf3d26[0x3]):__Oxf3d26[0x2];const getToken=require(__Oxf3d26[0x4]);let cookiesArr=[],cookie=__Oxf3d26[0x2],message;let getShareCodesMod=false;let shareCodesArr=[];let helpTimesArr=[];let UA,UAInfo={};$[__Oxf3d26[0x5]]= false;if($[__Oxf3d26[0x0]]()){Object[__Oxf3d26[0x8]](jdCookieNode)[__Oxf3d26[0x7]]((_0x5933xc)=>{cookiesArr[__Oxf3d26[0x6]](jdCookieNode[_0x5933xc])});if(process[__Oxf3d26[0xa]][__Oxf3d26[0x9]]&& process[__Oxf3d26[0xa]][__Oxf3d26[0x9]]=== __Oxf3d26[0xb]){console[__Oxf3d26[0xc]]= ()=>{}}}else {cookiesArr= [$[__Oxf3d26[0xf]](__Oxf3d26[0xe]),$[__Oxf3d26[0xf]](__Oxf3d26[0x10]),...jsonParse($[__Oxf3d26[0xf]](__Oxf3d26[0x13])|| __Oxf3d26[0x14])[__Oxf3d26[0x12]]((_0x5933xc)=>{return _0x5933xc[__Oxf3d26[0x11]]})][__Oxf3d26[0xd]]((_0x5933xc)=>{return !!_0x5933xc})};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxf3d26[0x1e]]($[__Oxf3d26[0x18]],__Oxf3d26[0x1c],__Oxf3d26[0x1d],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf3d26[0x1d]});return};if(process[__Oxf3d26[0xa]][__Oxf3d26[0x1f]]){shareCodesArr= process[__Oxf3d26[0xa]][__Oxf3d26[0x1f]];let _0x5933xe=shareCodesArr[__Oxf3d26[0x21]](__Oxf3d26[0x20]);shareCode= _0x5933xe[0x0];itemId= _0x5933xe[0x1]};authorCodeList=  await getAuthorCodeList(__Oxf3d26[0x22]);$[__Oxf3d26[0x23]]= authorCodeList[random(0,authorCodeList[__Oxf3d26[0x24]])];$[__Oxf3d26[0x25]]= $[__Oxf3d26[0x23]];if(shareCodesArr[__Oxf3d26[0x24]]== 0){console[__Oxf3d26[0xc]](__Oxf3d26[0x26]);getShareCodesMod= true};for(let _0x5933xf=0;_0x5933xf< cookiesArr[__Oxf3d26[0x24]];_0x5933xf++){if(cookiesArr[_0x5933xf]){cookie= cookiesArr[_0x5933xf];$[__Oxf3d26[0x27]]= decodeURIComponent(cookie[__Oxf3d26[0x28]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxf3d26[0x28]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxf3d26[0x29]]= _0x5933xf+ 1;$[__Oxf3d26[0x2a]]= true;$[__Oxf3d26[0x2b]]= __Oxf3d26[0x2];message= __Oxf3d26[0x2];UA= `${__Oxf3d26[0x2c]}${randomString(40)}${__Oxf3d26[0x2d]}${Math[__Oxf3d26[0x2e]]* 98+ 1}${__Oxf3d26[0x2f]}`;UAInfo[$[__Oxf3d26[0x27]]]= UA;console[__Oxf3d26[0xc]](__Oxf3d26[0x30]+ $[__Oxf3d26[0x29]]+ __Oxf3d26[0x31]+ ($[__Oxf3d26[0x2b]]|| $[__Oxf3d26[0x27]])+ __Oxf3d26[0x32]);if(!$[__Oxf3d26[0x2a]]){$[__Oxf3d26[0x1e]]($[__Oxf3d26[0x18]],`${__Oxf3d26[0x33]}`,`${__Oxf3d26[0x34]}${$[__Oxf3d26[0x29]]}${__Oxf3d26[0x35]}${$[__Oxf3d26[0x2b]]|| $[__Oxf3d26[0x27]]}${__Oxf3d26[0x36]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf3d26[0x1d]});if($[__Oxf3d26[0x0]]()){ await notify[__Oxf3d26[0x39]](`${__Oxf3d26[0x2]}${$[__Oxf3d26[0x18]]}${__Oxf3d26[0x37]}${$[__Oxf3d26[0x27]]}${__Oxf3d26[0x2]}`,`${__Oxf3d26[0x34]}${$[__Oxf3d26[0x29]]}${__Oxf3d26[0x35]}${$[__Oxf3d26[0x27]]}${__Oxf3d26[0x38]}`)};continue}; await Main();if(!shareCodesArr[0x0]&&  !getShareCodesMod){break};if($[__Oxf3d26[0x5]]){break}}}})()[__Oxf3d26[0x1b]]((_0x5933xd)=>{$[__Oxf3d26[0xc]](__Oxf3d26[0x2],`${__Oxf3d26[0x17]}${$[__Oxf3d26[0x18]]}${__Oxf3d26[0x19]}${_0x5933xd}${__Oxf3d26[0x1a]}`,__Oxf3d26[0x2])})[__Oxf3d26[0x16]](()=>{$[__Oxf3d26[0x15]]()});async function Main(){if(shareCodesArr[__Oxf3d26[0x24]]== 0){ await TaskSub(); await $[__Oxf3d26[0x3a]](2000)}else {if($[__Oxf3d26[0x29]]== 1){console[__Oxf3d26[0xc]](__Oxf3d26[0x3b]); await Task1(); await $[__Oxf3d26[0x3a]](2000)};if($[__Oxf3d26[0x29]]!= 1){ await Task(shareCode); await $[__Oxf3d26[0x3a]](2000)}}}async function Task(_0x5933x12){return  new Promise(async (_0x5933x13)=>{const _0x5933x14={functionId:__Oxf3d26[0x3c],appid:__Oxf3d26[0x3d],clientVersion:__Oxf3d26[0x3e],client:__Oxf3d26[0x3d],body:{"\x61\x63\x74\x69\x76\x65\x49\x64":__Oxf3d26[0x3f],"\x73\x68\x61\x72\x65\x49\x64":_0x5933x12,"\x69\x74\x65\x6D\x49\x64":itemId}};const _0x5933x15= await getH5st(__Oxf3d26[0x40],_0x5933x14);let _0x5933x16={url:`${__Oxf3d26[0x41]}${_0x5933x15}${__Oxf3d26[0x42]}`,headers:{Referer:__Oxf3d26[0x43],origin:__Oxf3d26[0x44],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxf3d26[0x45],Cookie:cookie+ __Oxf3d26[0x46]}};$[__Oxf3d26[0x51]](_0x5933x16,async (_0x5933x17,_0x5933x18,_0x5933x19)=>{try{_0x5933x19= JSON[__Oxf3d26[0x47]](_0x5933x19);if(_0x5933x19){console[__Oxf3d26[0xc]](`${__Oxf3d26[0x2]}`);console[__Oxf3d26[0xc]](`${__Oxf3d26[0x48]}${_0x5933x12}${__Oxf3d26[0x2]}`);if(_0x5933x19[__Oxf3d26[0x49]]== 0&& _0x5933x19[__Oxf3d26[0x1e]]== __Oxf3d26[0x4a]){console[__Oxf3d26[0xc]](__Oxf3d26[0x4b])}else {if(_0x5933x19[__Oxf3d26[0x49]]== 103&& _0x5933x19[__Oxf3d26[0x1e]]== __Oxf3d26[0x4c]){console[__Oxf3d26[0xc]](__Oxf3d26[0x4d])}else {if(_0x5933x19[__Oxf3d26[0x49]]== 2000&& _0x5933x19[__Oxf3d26[0x1e]]== __Oxf3d26[0x4e]){console[__Oxf3d26[0xc]](__Oxf3d26[0x4f])}else {console[__Oxf3d26[0xc]](_0x5933x19[__Oxf3d26[0x1e]])}}}}}catch(e){$[__Oxf3d26[0x50]](e,_0x5933x18)}finally{_0x5933x13()}})})}async function Task1(){return  new Promise(async (_0x5933x13)=>{let _0x5933x16={url:`${__Oxf3d26[0x52]}${$[__Oxf3d26[0x25]]}${__Oxf3d26[0x53]}`,headers:{Referer:__Oxf3d26[0x43],origin:__Oxf3d26[0x44],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxf3d26[0x45],Cookie:cookie+ __Oxf3d26[0x46]}};$[__Oxf3d26[0x51]](_0x5933x16,async (_0x5933x17,_0x5933x18,_0x5933x19)=>{try{_0x5933x19= JSON[__Oxf3d26[0x47]](_0x5933x19);if(_0x5933x19){if(_0x5933x19[__Oxf3d26[0x49]]== 0&& _0x5933x19[__Oxf3d26[0x1e]]== __Oxf3d26[0x4a]){console[__Oxf3d26[0xc]](__Oxf3d26[0x4b])}else {if(_0x5933x19[__Oxf3d26[0x49]]== 103&& _0x5933x19[__Oxf3d26[0x1e]]== __Oxf3d26[0x4c]){console[__Oxf3d26[0xc]](__Oxf3d26[0x4d])}else {if(_0x5933x19[__Oxf3d26[0x49]]== 2000&& _0x5933x19[__Oxf3d26[0x1e]]== __Oxf3d26[0x4e]){console[__Oxf3d26[0xc]](__Oxf3d26[0x4f])}else {console[__Oxf3d26[0xc]](_0x5933x19[__Oxf3d26[0x1e]])}}}}}catch(e){$[__Oxf3d26[0x50]](e,_0x5933x18)}finally{_0x5933x13()}})})}async function TaskSub(){return  new Promise(async (_0x5933x13)=>{let _0x5933x16={url:`${__Oxf3d26[0x54]}`,headers:{Referer:__Oxf3d26[0x55],origin:__Oxf3d26[0x44],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxf3d26[0x45],Cookie:cookie+ __Oxf3d26[0x46]}};$[__Oxf3d26[0x51]](_0x5933x16,async (_0x5933x17,_0x5933x18,_0x5933x19)=>{try{_0x5933x19= JSON[__Oxf3d26[0x47]](_0x5933x19);if(_0x5933x19){if(_0x5933x19[__Oxf3d26[0x49]]== 0&& _0x5933x19[__Oxf3d26[0x1e]]== __Oxf3d26[0x4a]){let _0x5933x1c=_0x5933x19[__Oxf3d26[0x56]][__Oxf3d26[0x25]]|| __Oxf3d26[0x2];let _0x5933x1d=_0x5933x19[__Oxf3d26[0x56]][__Oxf3d26[0x58]][__Oxf3d26[0x57]]|| __Oxf3d26[0x2];console[__Oxf3d26[0xc]](`${__Oxf3d26[0x59]}${_0x5933x1c}${__Oxf3d26[0x20]}${_0x5933x1d}${__Oxf3d26[0x2]}`)}else {if(_0x5933x19[__Oxf3d26[0x49]]== 2000&& _0x5933x19[__Oxf3d26[0x1e]]== __Oxf3d26[0x4e]){console[__Oxf3d26[0xc]](__Oxf3d26[0x4f])}else {console[__Oxf3d26[0xc]](_0x5933x19[__Oxf3d26[0x1e]])}}}}catch(e){$[__Oxf3d26[0x50]](e,_0x5933x18)}finally{_0x5933x13()}})})}function getH5st(_0x5933x1f,_0x5933x20){let _0x5933x19={appId,..._0x5933x20,ua:__Oxf3d26[0x45],pin:$[__Oxf3d26[0x27]]};let _0x5933x21={url:`${__Oxf3d26[0x5a]}`,body:JSON[__Oxf3d26[0x5b]](_0x5933x19),headers:{"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxf3d26[0x5c]},timeout:30000};return  new Promise(async (_0x5933x13)=>{$[__Oxf3d26[0x62]](_0x5933x21,(_0x5933x17,_0x5933x18,_0x5933x19)=>{let _0x5933x22=__Oxf3d26[0x2];try{if(_0x5933x17){console[__Oxf3d26[0xc]](__Oxf3d26[0x2]+ JSON[__Oxf3d26[0x5b]](_0x5933x17));console[__Oxf3d26[0xc]]($[__Oxf3d26[0x18]]+ __Oxf3d26[0x5d])}else {_0x5933x19= JSON[__Oxf3d26[0x47]](_0x5933x19);if(( typeof _0x5933x19=== __Oxf3d26[0x5e])&& _0x5933x19&& _0x5933x19[__Oxf3d26[0x5f]]){if(_0x5933x19[__Oxf3d26[0x5f]]){_0x5933x22= _0x5933x19[__Oxf3d26[0x5f]]|| __Oxf3d26[0x2]}}else {if(_0x5933x19[__Oxf3d26[0x49]]== 400){console[__Oxf3d26[0xc]](__Oxf3d26[0x60]+ _0x5933x19[__Oxf3d26[0x1e]])}else {console[__Oxf3d26[0xc]](__Oxf3d26[0x61])}}}}catch(e){$[__Oxf3d26[0x50]](e,_0x5933x18)}finally{_0x5933x13(_0x5933x22)}})})}function randomString(_0x5933xd){_0x5933xd= _0x5933xd|| 32;let _0x5933x24=__Oxf3d26[0x63],_0x5933x25=_0x5933x24[__Oxf3d26[0x24]],_0x5933x26=__Oxf3d26[0x2];for(let _0x5933xf=0;_0x5933xf< _0x5933xd;_0x5933xf++){_0x5933x26+= _0x5933x24[__Oxf3d26[0x65]](Math[__Oxf3d26[0x64]](Math[__Oxf3d26[0x2e]]()* _0x5933x25))};return _0x5933x26}function jsonParse(_0x5933x28){if( typeof _0x5933x28== __Oxf3d26[0x66]){try{return JSON[__Oxf3d26[0x47]](_0x5933x28)}catch(e){console[__Oxf3d26[0xc]](e);$[__Oxf3d26[0x1e]]($[__Oxf3d26[0x18]],__Oxf3d26[0x2],__Oxf3d26[0x67]);return []}}}function getAuthorCodeList(_0x5933x2a){return  new Promise((_0x5933x13)=>{const _0x5933x16={url:`${__Oxf3d26[0x2]}${_0x5933x2a}${__Oxf3d26[0x68]}${ new Date()}${__Oxf3d26[0x2]}`,timeout:10000,headers:{"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxf3d26[0x69]}};$[__Oxf3d26[0x51]](_0x5933x16,async (_0x5933x17,_0x5933x18,_0x5933x19)=>{try{if(_0x5933x17){$[__Oxf3d26[0x6a]]= false}else {if(_0x5933x19){_0x5933x19= JSON[__Oxf3d26[0x47]](_0x5933x19)};$[__Oxf3d26[0x6a]]= true}}catch(e){$[__Oxf3d26[0x50]](e,_0x5933x18);_0x5933x19= null}finally{_0x5933x13(_0x5933x19)}})})}function random(_0x5933x2c,_0x5933x2d){return Math[__Oxf3d26[0x64]](Math[__Oxf3d26[0x2e]]()* (_0x5933x2d- _0x5933x2c))+ _0x5933x2c}(function(_0x5933x2e,_0x5933x2f,_0x5933x30,_0x5933x31,_0x5933x32,_0x5933x33){_0x5933x33= __Oxf3d26[0x6b];_0x5933x31= function(_0x5933x34){if( typeof alert!== _0x5933x33){alert(_0x5933x34)};if( typeof console!== _0x5933x33){console[__Oxf3d26[0xc]](_0x5933x34)}};_0x5933x30= function(_0x5933x25,_0x5933x2e){return _0x5933x25+ _0x5933x2e};_0x5933x32= _0x5933x30(__Oxf3d26[0x6c],_0x5933x30(_0x5933x30(__Oxf3d26[0x6d],__Oxf3d26[0x6e]),__Oxf3d26[0x6f]));try{_0x5933x2e= __encode;if(!( typeof _0x5933x2e!== _0x5933x33&& _0x5933x2e=== _0x5933x30(__Oxf3d26[0x70],__Oxf3d26[0x71]))){_0x5933x31(_0x5933x32)}}catch(e){_0x5933x31(_0x5933x32)}})({})
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

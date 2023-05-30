<template>
    <div>
        <!-- 命令行界面 -->
        <div class="command-line">
          <div class="output" ref="output">{{ output }}</div>
          <input class="input" v-model="command" @keyup.enter="runCommand" @keyup.up.38="runLastCommand"/>
        </div>
    
        <!-- 下方白色空白区域 -->
        <div class="footer">
          <h2>CAMPUS-MALL</h2>
          <h2>Administrators</h2>
        </div>
      </div>
  </template>
  
  <script>
  import {ElNotification} from 'element-plus';
  import {admin} from '@/api/user/admin'
  import router from "@/router";
  export default {
    data() {
      return {
        command: '',
        output: '',
        lastcommand:'',
      };
    },
    methods: {
      runLastCommand() {
      let input = this.lastcommand;
      if (!input) {
        input = this.lastCommand; // 如果本次输入为空，则使用上一次输入的内
      }
    },
      runCommand() {
        const input = this.command
        this.lastcommand = input;
        if (!input) return;
        this.output='';
        // 解析命令并调用相应的函数
        switch (input) {
          case 'help':
            this.print('帮助信息：\n命令1：check + user or commodityid or transaction\n命令2：prohibit + user \n命令3：realease + user \n命令4：delete + commodity\n命令5：grounding + commodity\n命令6：send + transaction\n命令7：send + user + money \n命令8：clear ');
            break;
          case 'clear':
            this.print("");
            break;
            //调用接口后端使用
          default:
            let params = {};
            params.inputstr = input;
            admin(params).then(res => {
            if(res.data.CODE == "200"){
                this.print(res.data.backMessage);
            }
            else if(res.data.CODE == "201"){
                this.print("输入指令有误请检查，查看操作手册");
            }
            else{
                this.print("服务器出错");
            }
          });
            break;
        }
  
        // 清空输入框
        this.command = '';
      },
      executeCommand1() {
        // 执行函数1的代码
        this.print('执行函数1');
      },
      executeCommand2() {
        // 执行函数2的代码
        this.print('执行函数2');
      },
      print(text) {
        // 更新输出区域的内容

        this.output = text;
        this.$nextTick(() => {
          this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
        });
      },
    },
  };
  </script>
  
  <style>
  .command-line {
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    font-family: monospace;
  }
  
  .output {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    white-space: pre-wrap;
    color: chartreuse;
    font-size: 18px;
  }
  
  .input {
    padding: 10px;
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    font-size: 24px;
  }
  .footer {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    font-size: 80px;
    text-align: center;
    margin-top: 150px;
    flex-direction: column;
    font-style: "微软雅黑";
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  </style>
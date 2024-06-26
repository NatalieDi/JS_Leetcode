function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
     }
    var removeElements = function(head, val) {
        let dummy = new ListNode(-1);
        dummy.next=head;
        let prev = dummy;
        let cur = head;
        while(cur) {
            if (cur.val===val){
                prev.next = cur.next;
                cur=cur.next;
            } else{
                prev = cur;
                cur=cur.next;
            }
        }

        return dummy.next;
    }

console.log(removeElements([1,2,6,3,4,5,6], 6)); // [1,2,3,4,5]
console.log(removeElements([7,7,7,7], 7)); // []
console.log(removeElements([], 1));// []
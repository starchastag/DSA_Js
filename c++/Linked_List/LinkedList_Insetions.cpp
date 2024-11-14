#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    Node(int value)
    {
        data = value;
        next = NULL;
    }
};

int main()
{
    // Node A1(4);
    Node *Head, *Tail;
    Head = NULL;
    Tail = NULL;

    // Manually add value in the 📔

    // Head = new Node(4);
    // cout<<Head->data<<endl;
    // cout<<Head->next<<endl;

    int arr[] = {1, 5, 6, 7, 8, 9};

    // insert the node at beginig
    //  for(int i=0;i<6;i++)
    //  {
    //  if(Head == NULL)
    //  {
    //      Head = new Node(arr[i]);
    //  }else
    //  {
    //      Node *temp;
    //      temp = new Node(arr[i]);
    //      temp -> next = Head;
    //      Head = temp;
    //  }
    //  }
    // insert the value at the end

    // linked is empty
    for (int i = 0; i < 6; i++)
    {
        if (Head == NULL)
        {
            Head = new Node(arr[i]);
            Tail = Head;
        }
        else
        {
            Tail->next = new Node(arr[i]);
            Tail = Tail->next;
        }
    }

    // print the value
    Node *temp = Head;
    while (temp != NULL)
    {
        cout << temp->data;
        temp = temp->next;
    }
}
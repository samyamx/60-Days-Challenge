#include <stdio.h>

int sum()
{
    int a=10;
    int b=20;

    return a+b;
}

int main()
{
    int result;

    result=sum();

    printf("%d",result);

    return 0;
}
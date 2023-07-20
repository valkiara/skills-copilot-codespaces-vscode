function skillMember(){
    return {
        restrict: 'E',
        templateUrl: 'templates/skill-member.html',
        controller: 'SkillMemberController',
        controllerAs: 'skillMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}
